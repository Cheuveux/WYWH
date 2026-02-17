import '../style.css'
import '../photo.css'
import { openHeader } from '../header.js';
import { initCircularNav } from '../circular_nav.js';
import { postcard } from '../3D-postcard.js';
import { initializePhotoSwiper } from '../photo_src/photo_swiper.js';
import { loadPhotoFromSupabase, generatePhotoCard } from '../photo_src/loadPhotoFromSupabase.js';

export async function render(container) {
    container.innerHTML = `
        <header class="site-header">
            <h1 class="logo">wishyouwerehere<span>.photo</span></h1>
            <nav id="main-nav" class="main-nav">
                <a class="nav-item" href="/" data-link><span>.world</span></a>
                <a class="nav-item" href="/music" data-link><span>.music</span></a>
                <a class="nav-item" href="/artists" data-link><span>.artists</span></a>
                <a class="nav-item" href="/shop" data-link><span>.shop</span></a>
            </nav>
        </header>

        <div class="swiper photo-swiper">
            <div class="swiper-wrapper" id="photo-wrapper">
                <div class="swiper-slide">
                    <p style="color: var(--text-color); text-align: center;">Chargement des photos...</p>
                </div>
            </div>
        </div>
    `;

    openHeader();
    initCircularNav();

    // ✅ Charger les photos depuis Supabase
    const photos = await loadPhotoFromSupabase();
    
    const wrapper = document.getElementById('photo-wrapper');
    if (photos.length > 0) {
        // ✅ Générer le HTML des cartes
        wrapper.innerHTML = photos.map(photo => generatePhotoCard(photo)).join('');
        
        // ✅ Initialiser les cartes 3D pour chaque carte
        document.querySelectorAll('.card').forEach(cardElement => {
            const content = cardElement.dataset.content;
            if (content) {
                const [rectoPath, versoPath] = content.split('|').map(path => path.trim());
                const cardInner = cardElement.querySelector('.card-inner');
                if (cardInner && rectoPath && versoPath) {
                    postcard(cardInner, rectoPath, versoPath);
                }
            }
        });
        
        // ✅ Initialiser le Swiper
        initializePhotoSwiper();
    } else {
        wrapper.innerHTML = '<div class="swiper-slide"><p style="color: var(--text-color); text-align: center;">Aucune photo disponible</p></div>';
    }
}