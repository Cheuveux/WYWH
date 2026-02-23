import '../style.css';
import '../artist_id.css';
import '../photo.css';
import { openHeader } from '../header.js';
import { fetchArtist } from '../artist_page.js';
import { initCircularNav } from '../circular_nav.js';

export async function render(container, path) {
    // ✅ Récupère l'ID depuis l'URL (ex: /artists/5)
    const artistId = path.split('/').pop();
    
    container.innerHTML = `
        <header class="site-header">
            <h1 class="logo">
                wishyouwerehere.<span id="artist_name">...</span>
            </h1>
            <nav id="main-nav" class="main-nav" style="display: none; opacity: 0;">
                <a class="nav-item" href="/" data-link><span>.world</span></a>
                <a class="nav-item" href="/music" data-link><span>.music</span></a>
                <a class="nav-item" href="/photo" data-link><span>.photo</span></a>
                <a class="nav-item" href="/artists" data-link><span>.artists</span></a>
                <a class="nav-item" href="/shop" data-link><span>.shop</span></a>
            </nav>
        </header>

        <div class="main_content_artist" id="main_content_artist">
            <div class="artist_content" id="artist_content">
                <div class="artist_tracks" id="artist_tracks"></div>
                <div class="artiste_bio" id="artiste_bio">
                    <div class="bio_line actu-1" id="actu-1"></div>
                    <div class="bio_line actu-2" id="actu-2"></div>
                    <div class="bio_line actu-3" id="actu-3"></div>
                    <div class="bio_line actu-4" id="actu-4">
                        <div class="bio_short_line4">Short</div>
                        <div class="bio_long_line4"></div>
                    </div>
                </div>
                <div class="artist-photo-container" id="artist-photo-container"></div>
                <div class="artists_reco" id="artist_reco"></div>
            </div>
            <div class="artist_photos_section" id="artist_photos_section">
                <div class="swiper photo-swiper artist-photo-swiper">
                    <div class="swiper-wrapper" id="artist-photo-wrapper"></div>
                </div>
            </div>
        </div>
    `;

    openHeader();
    initCircularNav();

    await fetchArtist(artistId);

    const trackItems = document.querySelectorAll('.track_item.music-item');
    trackItems.forEach(item => {
        item.addEventListener('click', () => {
            const audioUrl = item.getAttribute('data-audio');
            if (audioUrl && window.wywhRadio) {
                window.wywhRadio.playUrl(audioUrl);
                document.querySelectorAll('.music-item.active').forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            }
        });
    });
}