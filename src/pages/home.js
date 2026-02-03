import '../style.css'
import { postcard } from '../3D-postcard.js';
import { initializeHomeSwiper } from '../home-swiper.js';
import { shuffle } from '../shuffle.js';
import { openHeader } from '../header.js';
import { initWeather } from '../weather.js';
import { initCircularNav } from '../circular_nav.js';

export async function render(container) {
    container.innerHTML = `
        <header class="site-header">
    	<h1 class="logo">wishyouwerehere<span>.world</span></h1>
            <nav id="main-nav" class="main-nav">
                <a class="nav-item" href="/music" data-link><span>.music</span></a>
                <a class="nav-item" href="/photo" data-link><span>.photo</span></a>
                <a class="nav-item" href="/artists" data-link><span>.artists</span></a>
                <a class="nav-item" href="/shop" data-link><span>.shop</span></a>
            </nav>
        </header>

        <div class="swiper home-swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="card" data-content="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/photos/post-card/Antoine_Bertoli_2025/postcard%20wywh%202%20AB13.jpg | https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/photos/post-card/Antoine_Bertoli_2025/postcard%20wywh%202%20AB14.jpg">
                        <div class="card-inner"></div>
                    </div>
                    <h2 class="project-info">
                        <a href="" class="artist-info">Antoine Bertoli</a>
                        <p>-</p>
                        <a href="" class="location">Kyoto, JP</a>
                    </h2>
                </div>
                <div class="swiper-slide">
                    <div class="card" data-content="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/photos/post-card/Antoine_Bertoli_2025/postcard%20wywh%202%20AB.jpg|https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/photos/post-card/Antoine_Bertoli_2025/postcard%20wywh%202%20AB2.jpg">
                        <div class="card-inner"></div>
                    </div>
                    <h2 class="project-info">
                        <a href="" class="artist-info">Antoine Bertoli</a>
                        <p>-</p>
                        <a href="" class="location">Paris, FR</a>
                    </h2>
                </div>
                <div class="swiper-slide">
                    <div class="card" data-content="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/photos/post-card/Antoine_Bertoli_2025/postcard%20wywh%202%20AB3.jpg|https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/photos/post-card/Antoine_Bertoli_2025/postcard%20wywh%202%20AB4.jpg">
                        <div class="card-inner"></div>
                    </div>
                    <h2 class="project-info">
                        <a href="" class="artist-info">Antoine Bertoli</a>
                        <p>-</p>
                        <a href="" class="location">Kyoto, JP</a>
                    </h2>
                </div>
                <div class="swiper-slide">
                    <div class="card" data-content="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/photos/post-card/Antoine_Bertoli_2025/postcard%20wywh%202%20AB5.jpg|https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/photos/post-card/Antoine_Bertoli_2025/postcard%20wywh%202%20AB6.jpg">
                        <div class="card-inner"></div>
                    </div>
                    <h2 class="project-info">
                        <a href="" class="artist-info">Antoine Bertoli</a>
                        <p>-</p>
                        <a href="" class="location">Kyoto, JP</a>
                    </h2>
                </div>
                <div class="swiper-slide">
                    <div class="card" data-content="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/photos/post-card/Antoine_Bertoli_2025/postcard%20wywh%202%20AB7.jpg|https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/photos/post-card/Antoine_Bertoli_2025/postcard%20wywh%202%20AB8.jpg">
                        <div class="card-inner"></div>
                    </div>
                    <h2 class="project-info">
                        <a href="" class="artist-info">Antoine Bertoli</a>
                        <p>-</p>
                        <a href="" class="location">Kyoto, JP</a>
                    </h2>
                </div>
                <div class="swiper-slide">
                    <div class="card" data-content="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/photos/post-card/Antoine_Bertoli_2025/postcard%20wywh%202%20AB9.jpg|https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/photos/post-card/Antoine_Bertoli_2025/postcard%20wywh%202%20AB10.jpg">
                        <div class="card-inner"></div>
                    </div>
                    <h2 class="project-info">
                        <a href="" class="artist-info">Antoine Bertoli</a>
                        <p>-</p>
                        <a href="" class="location">Kyoto, JP</a>
                    </h2>
                </div>
            </div>
        </div>

        <!-- ✅ ACTU LINES (spécifique à la page home) -->
        <div class="actu-lines" style="display: none; opacity: 0;">
            <div class="line line-1">ACTUALITY FROM THE CLOUDS</div>
            <div class="line line-2">Here is a special show everyone is waiting for</div>
            <div class="line line-3">For all televisions and broadcasters</div>
            <div class="line line-4">
                <div class="short_line4">Ayo</div>
                <div class="long_line4">Mandem my friend</div>
            </div>
        </div>
    `;

    // ✅ INITIALISATION DES SCRIPTS (après avoir injecté le HTML)
    openHeader();           // Initialise le header (gère le clic sur le logo)
    shuffle();              // Initialise le shuffle
    postcard();             // Initialise les cartes postales 3D
    initializeHomeSwiper(); // Initialise Swiper
    initWeather();          // Initialise la météo
    initCircularNav();      // Initialise la navigation circulaire
}
