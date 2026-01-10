import './style.css'
import { postcard } from './3D-postcard.js';
import { initializeHomeSwiper } from './home-swiper.js';
import { shuffle } from './shuffle.js';
import { intializeRadio } from './radio.js';
import { openHeader} from './header.js';
import { initWeather } from './weather.js';
import { initThemeSwitcher } from './themeSwitcher.js'

document.querySelector('#app').innerHTML = `

  <header class="site-header">
    <h1 class="logo">wishyouwerehere<span>.world</span></h1>
    <nav id="main-nav" class="main-nav">
      <a class="nav-item" href="${import.meta.env.BASE_URL}music.html"><span>.music</span></a>
      <a class="nav-item" href="${import.meta.env.BASE_URL}photo.html"><span>.photo</span></a>
      <a class="nav-item" href="${import.meta.env.BASE_URL}artists.html"><span>.artists</span></a>
      <a class="nav-item" href="${import.meta.env.BASE_URL}shop.html"><span>.shop</span></a>
    </nav>
  </header>


<div class="swiper home-carroussel">
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
      <h2/>
    </div>
  </div>
</div>

  
  <div class="actu-lines">
    <div class="line line-1">ACTUALITY FROM THE CLOUDS</div>
    <div class="line line-2">Here is a special show everyone is waiting for</div>
    <div class="line line-3">For all televisions and broadcasters</div>
    <div class="line line-4">
      <div class ="short_line4">Ayo</div>
      <div class ="long_line4">Mandem my friend</div>
    </div>
    </div>
 <div class="audio-footer">
    <img  class="radio-toggle" id="radio-toggle" src="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/icons/radio-icons/radio%20wywh.svg" alt="Radio toggle" />
        <div class="custom-player"  id="custom-player">
          
          <div class="progress-container">
            <div class="scrolling-text">
              <div id="music-artist" class="music-artist"></div>
              <div id="track-title" class="track-title"></div>
              <div id="music-artist-clone" class="music-artist"></div>
              <div id="track-title-clone" class="track-title"></div>
              <div id="music-artist-clone2" class="music-artist"></div>
              <div id="track-title-clone2" class="track-title"></div>
            </div>
          </div>

          
        </div>
        <audio class="radio-player" id="radio-player"></audio>
  </div> 
`;

/*Ordre important !! */
initThemeSwitcher();
openHeader();
shuffle();
postcard();
initializeHomeSwiper();
intializeRadio();
initWeather();



