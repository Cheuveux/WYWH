import { supabase } from './config_supabase.js';
import { gsap } from "gsap";

export async function loadArtist(containerID) {
    const container = document.getElementById(containerID);
    if (!container) {
        console.error("container introuvable");
        return;
    }

    container.innerHTML = "<h1>Loading Artists</h1>";

    const { data: artists, error } = await supabase
        .from('artistes')
        .select('id, name')
        .order('name', { ascending: true });

    if (error) {
        console.error(error);
        container.innerHTML = "<p>Echec de chargement</p>";
        return;
    }

    if (!artists || artists.length === 0) {
        container.innerHTML = "<p>Aucun artiste trouvé</p>";
        return;
    }

    // Création du wrapper principal
    const list = document.createElement('div');
    list.className = 'artists_list';

    // Fonction pour créer un élément artiste
    function createArtistItem(artist) {
        const item = document.createElement('div');
        item.className = 'artist_name_item';
        item.dataset.id = artist.id;
        const h1 = document.createElement('h1');
        h1.textContent = artist.name;
        item.appendChild(h1);
        item.addEventListener('click', () => {
            window.location.href = `artist.html?id=${artist.id}`;
        });
        return item;
    }

    // Ajout des artistes originaux
    artists.forEach(artist => {
        const item = createArtistItem(artist);
        list.appendChild(item);
    });

    // Clonage dynamique des éléments pour le scroll infini
    const cloneCount = 2; // nombre de clones
    for (let i = 0; i < cloneCount; i++) {
        artists.forEach(artist => {
            const clone = createArtistItem(artist);
            list.appendChild(clone);
        });
    }

    container.innerHTML = '';
    container.appendChild(list);
}