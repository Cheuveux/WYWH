import '../music.css';
import '../style.css';
import { openHeader } from '../header.js';
import { loadTracksFromSupabase } from '../calling_tracks_from_supabase.js';
import { initCircularNav } from '../circular_nav.js';

export async function render(container) {
    container.innerHTML = `
        <header class="site-header">
    	<h1 class="logo">wishyouwerehere<span>.music</span></h1>
            <nav id="main-nav" class="main-nav">
                <a class="nav-item" href="/" data-link><span>.world</span></a>
                <a class="nav-item" href="/photo" data-link><span>.photo</span></a>
                <a class="nav-item" href="/artists" data-link><span>.artists</span></a>
                <a class="nav-item" href="/shop" data-link><span>.shop</span></a>
            </nav>
        </header>

        <div class="music-playlist" id="music-playlist">
            <!-- Les tracks seront chargées dynamiquement -->
        </div>
    `;

    // ✅ APRÈS avoir injecté le HTML, on initialise les scripts
    openHeader();
    initCircularNav();

    // ✅ Charge les tracks depuis Supabase APRÈS avoir créé #music-playlist
    loadTracksFromSupabase('music-playlist', (audioUrl, item) => {
        // Joue la track
        if (window.wywhRadio) {
            window.wywhRadio.playUrl(audioUrl);
        }
        
        // Marque visuellement l'item actif
        document.querySelectorAll('.music-item.active').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
}