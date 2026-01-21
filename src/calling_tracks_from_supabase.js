import { supabase } from './config_supabase.js';

/**
 * Chargement des tracks depuis Supabase + generation du HTML
 * @param {string} containerID - ID du conteneur où injecter les tracks
 * @param {Function} onTrackClick - Callback appelé quand on clique sur une track
 */
export async function loadTracksFromSupabase(containerID, onTrackClick) {
    const container = document.getElementById(containerID); 
    
    if (!container) {
        console.error(`Container #${containerID} not found`);
        return;
    }
    
    try {
        // message de chargement
        container.innerHTML = '<p style="color: var(--text-color); text-align:center"> Chargement des pistes...</p>';

        const { data: tracks, error } = await supabase
            .from('wywh_tracks')
            .select(`
                id,
                title,
                audio_url,
                cover_url,
                project,
                wywh_track_artist (
                artistes (
                    id,
                    name
                )
                )
            `)
            .order('order', { ascending: true });
        
        if (error) throw error;
        
        if (!tracks || tracks.length === 0) {
            container.innerHTML = '<p style="color: var(--text-color); text-align: center;"> Aucune Piste disponible pour le moment sorrrry</p>';
            return;
        }

        const getArtistNames = (track) =>
            track.wywh_track_artist
            ?.map(ta => ta.artistes.name)
            .join(', ') || 'Artiste inconnu';

        container.innerHTML = tracks.map(track => {
  const artistNames = getArtistNames(track);

  return `
    <div class="music-item"
         data-audio="${track.audio_url}"
         data-title="${track.title}"
         data-artist="${artistNames}"
         data-cover="${track.cover_url}">
      <div class="music-cover">
        <img src="${track.cover_url}" alt="${track.title}">
      </div>
      <div class="music-info">
        <div class="music-title">
          <h1>${track.title}</h1>
        </div>
        <div class="music-2nd-info">
          <a class="music-artist">${artistNames}</a>
          <a class="music-project">${track.project}</a>
        </div>
      </div>
    </div>
  `;
}).join('');

        if (onTrackClick) {
            container.querySelectorAll('.music-item').forEach(item => {
                item.addEventListener('click', () => {
                    const audioUrl = item.getAttribute('data-audio');
                    const title = item.getAttribute('data-title');
                    const artist = item.getAttribute('data-artist');
                    const cover = item.getAttribute('data-cover');
                    
                    if (audioUrl) {
                        onTrackClick(audioUrl, item);
                        updateMediaSession(title, artist, cover);
                    }
                });
            });
        }
        
        console.log(`✅ ${tracks.length} pistes chargées depuis Supabase`);

    } catch (error) {
        console.error("Erreur lors du chargement des tracks :", error);
        container.innerHTML = '<p style="color: var(--text-color); text-align: center;"> Erreur de chargement</p>';
    }
}

/**
 * Met à jour les métadonnées du Media Session (widget natif)
 */
function updateMediaSession(title, artist, coverUrl) {
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: title,
            artist: artist,
            artwork: [
                { src: coverUrl, sizes: '512x512', type: 'image/jpeg' }
            ]
        });
    }
}