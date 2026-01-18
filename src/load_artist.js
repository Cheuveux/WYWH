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

    // Génération du HTML
    const html = artists.map(artist => `
        <div class="artist_name_item" data-id="${artist.id}">
            <h1>${artist.name}</h1>
        </div>
    `).join('');

    // Ajoute un wrapper pour l'animation
    container.innerHTML = `<div class="artists_list">${html + html + html}</div>`;

    const list = container.querySelector('.artists_list');

    list.querySelectorAll('.artist_name_item').forEach(item => {
        item.addEventListener('click', () => {
            const artistId = item.dataset.id;
            window.location.href = `artist.html?id=${artistId}`;
        });
    });

    // Animation GSAP sur la liste interne
    requestAnimationFrame(() => {
        const singleListHeight = list.scrollHeight / 2;
        const duration = singleListHeight / 30;

        gsap.set(list, { y: 0 });

        gsap.to(list, {
            y: -singleListHeight,
            duration: duration,
            ease: "linear",
            repeat: -1,
            modifiers: {
                y: gsap.utils.wrap(-singleListHeight, 0)
            }
        });
    });
}