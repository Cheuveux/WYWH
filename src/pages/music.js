import '../music.css';
import '../style.css';
import { openHeader } from '../header.js';
import { loadTracksFromSupabase } from '../calling_tracks_from_supabase.js';
import { initCircularNav } from '../circular_nav.js';
import { initFilterAccordion, sortTracks } from '../filterTracks.js';

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

    openHeader();
    initCircularNav();

    // ✅ Stocke les tracks une fois chargées
    let tracksData = [];

    // ✅ Callback de lecture
    const onTrackClick = (audioUrl, item) => {
        if (window.wywhRadio) {
            window.wywhRadio.playUrl(audioUrl);
        }
        document.querySelectorAll('.music-item.active').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    };

    // ✅ Charge les tracks depuis Supabase
    tracksData = await loadTracksFromSupabase('music-playlist', onTrackClick);

    // ✅ Initialise le filtre accordéon
    initFilterAccordion('music-playlist', (sortType) => {
        console.log('🔀 Tri sélectionné:', sortType);
        const sorted = sortTracks(tracksData, sortType);
        loadTracksFromSupabase('music-playlist', onTrackClick, sorted);
    });
}