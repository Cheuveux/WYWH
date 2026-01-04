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
            .select('*')
            .order('order', { ascending: true });
        
        if (error) throw error;
        
        if (!tracks || tracks.length === 0) {
            container.innerHTML = '<p style="color: var(--text-color); text-align: center;"> Aucune Piste disponible pour le moment sorrrry</p>';
            return;
        }
        
        container.innerHTML = tracks.map(track => `
            <div class="music-item" data-audio="${track.audio_url}">
                <div class="music-cover">
                    <img src="${track.cover_url}" alt="${track.title}">
                </div>
                <div class="music-info">
                    <div class="music-title">
                        <h1>${track.title}</h1>
                    </div>
                    <div class="music-2nd-info">
                        <a href="./src/providers.js" class="music-artist">${track.artist}</a>
                        <a href="./src/details/music/" class="music-project">${track.project}</a>
                    </div>
                </div>
            </div>	
        `).join('');

        if (onTrackClick) {
            container.querySelectorAll('.music-item').forEach(item => {
                item.addEventListener('click', () => {
                    const audioUrl = item.getAttribute('data-audio');
                    if (audioUrl) {
                        onTrackClick(audioUrl, item);
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