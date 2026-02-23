import { supabase } from './config_supabase.js'
import { loadPhotosByArtist } from './photo_src/loadPhotoFromSupabase.js'
import { postcard } from './3D-postcard.js'
import { initializePhotoSwiper } from './photo_src/photo_swiper.js'

export async function fetchArtist(artistId) {
    const artistID = Number(artistId);

    if (!artistID || isNaN(artistID)) {
        console.error('❌ ID artiste invalide:', artistId);
        const nameEl = document.getElementById('artist_name');
        if (nameEl) nameEl.textContent = "Artiste introuvable";
        return;
    }

    console.log('✅ Chargement artiste ID:', artistID);

    //chargement des infos de l'artiste
    const {data: artist, error: artistError} = await supabase
        .from('artistes')
        .select('name, bio_title, bio_summary, bio_details, bio_end, photo_artist')
        .eq('id', artistID)
        .single();
        
    if (artistError) {
        console.error('❌ Erreur chargement artiste:', artistError);
        const nameEl = document.getElementById('artist_name');
        if (nameEl) nameEl.textContent = "Erreur chargement";
        return;
    }
    
    console.log('✅ Artiste trouvé:', artist.name);
    
    const nameEl = document.getElementById('artist_name');
    if (nameEl) nameEl.textContent = artist.name;

    // chargement des tracks liées à cet artiste
    const {data: trackLinks, error: tracksError} = await supabase
        .from('wywh_track_artist')
        .select(`
            track_id,
            wywh_tracks (
                id,
                title,
                audio_url,
                cover_url
            )
        `)
        .eq('artist_id', artistID);
        
    console.log('✅ Tracks trouvées:', trackLinks);
    
    if (tracksError) {
        console.error('❌ Erreur chargement tracks:', tracksError);
        return;
    }
    
    const container = document.getElementById('artist_tracks');
    if (!container) {
        console.error('❌ Container artist_tracks introuvable');
        return;
    }
    
    if(!trackLinks || trackLinks.length === 0) {
        container.remove();
    } else {
        container.innerHTML = trackLinks.map(link => `
        <div class="track_item music-item" data-id="${link.wywh_tracks.id}" data-audio="${link.wywh_tracks.audio_url}">
            <img src="${link.wywh_tracks.cover_url}" class="music_cover">
            <div class="music-info">
                <div class="music-title">
                    <h1>${link.wywh_tracks.title}</h1>
                </div>
                <div class="music-artist">${artist.name}</div>
            </div>
        </div>
    `).join('');
        console.log('✅ HTML tracks injecté');
    }

    //affichage du contenu descriptif de l'artiste
    const actu1 = document.getElementById('actu-1');
    const actu2 = document.getElementById('actu-2');
    const actu3 = document.getElementById('actu-3');
    const actu4 = document.getElementById('actu-4');
    
    if (actu1) actu1.textContent = artist.bio_title || "";
    if (actu2) actu2.textContent = artist.bio_summary || "";
    if (actu3) actu3.textContent = artist.bio_details || "";
    if (actu4) {
        const longLine = actu4.querySelector('.bio_long_line4');
        if (longLine) longLine.textContent = artist.bio_end || "";
    }
    
    const photoContainer = document.getElementById('artist-photo-container');
    if (artist.photo_artist && photoContainer) {
        const photoArtist = document.createElement('img');
        photoArtist.src = artist.photo_artist;
        photoArtist.className = "artist-photo";
        photoContainer.innerHTML = ''; // Vide avant d'ajouter
        photoContainer.appendChild(photoArtist);
    }
    
    console.log('✅ Bio et photo affichées');

    // chargement des photos liées à l'artiste
    const photos = await loadPhotosByArtist(artistID);
    const photoWrapper = document.getElementById('artist-photo-wrapper');

    if (photos.length > 0 && photoWrapper) {
        photoWrapper.innerHTML = photos.map(photo => `
            <div class="swiper-slide">
                <div class="card" data-content="${photo.photo_front}|${photo.photo_back}">
                    <div class="card-inner"></div>
                </div>
                <h2 class="project-info">
                    <span class="location">${photo.localisation || ''}</span>
                </h2>
            </div>
        `).join('');

        document.querySelectorAll('.artist-photo-swiper .card').forEach(cardElement => {
            const content = cardElement.dataset.content;
            if (content) {
                const [rectoPath, versoPath] = content.split('|').map(p => p.trim());
                const cardInner = cardElement.querySelector('.card-inner');
                if (cardInner && rectoPath && versoPath) {
                    postcard(cardInner, rectoPath, versoPath);
                }
            }
        });

        initializePhotoSwiper('.artist-photo-swiper');
        console.log(`✅ ${photos.length} photos de l'artiste affichées`);
    } else if (photoWrapper) {
        photoWrapper.closest('.artist_photos_section')?.remove();
    }
}

