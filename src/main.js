import './style.css'
import { initializeCards } from './card.js';
import { initializeHomeSwiper } from './home-swiper.js';
import { shuffle } from './shuffle.js';
import { intializeRadio } from './radio.js';
import { openHeader} from './header.js';


document.querySelector('#app').innerHTML = `

  <header class="site-header">
    <button id="menu-button" class="menu-button" aria-label="Ouvrir le menu">
      <img  src="./icons/menu-icon.svg" alt="Radio toggle" />
    </button>
    <h1 class="logo">wishyouwerehere<span>.world</span></h1>
    <nav id="main-nav" class="main-nav">
          <a class="nav-item" href="./music.html">wishyouwerehere<span>.music</span></a>
          <a class="nav-item" href="./photo.html">wishyouwerehere<span>.photo</span></a>
          <a class="nav-item" href="./providers.html">wishyouwerehere<span>.providers</span></a>
    </nav>
        

  </header>


  <div class="swiper home-carroussel">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="card">
          <div class="card-inner">
            <div class="card-front"><img src="./img/post-card/postcart-zine/postcard wywh.png" alt=""></div>
            <div class="card-back"><img src="./img/post-card/postcart-zine/back.png" alt=""></div>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="card">
          <div class="card-inner">
            <div class="card-front"><img src="./img/post-card/postcart-zine/postcard wywh7.png" alt=""></div>
            <div class="card-back"><img src="./img/post-card/postcart-zine/back.png" alt=""></div>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="card">
          <div class="card-inner">
            <div class="card-front"><img src="./img/post-card/postcart-zine/postcard wywh19.png" alt=""></div>
            <div class="card-back"><img src="./img/post-card/postcart-zine/back.png" alt=""></div>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="card">
          <div class="card-inner">
            <div class="card-front"><img src="./img/post-card/postcart-antoine/postcard wywh 2 AB.png" alt=""></div>
            <div class="card-back"><img src="./img/post-card/postcart-antoine/postcard wywh 2 AB2.png" alt=""></div>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="card">
          <div class="card-inner">
            <div class="card-front"><img src="./img/post-card/postcart-antoine/postcard wywh 2 AB3.png" alt=""></div>
            <div class="card-back"><img src="./img/post-card/postcart-antoine/postcard wywh 2 AB4.png" alt=""></div>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
       <div class="card">
          <div class="card-inner">
            <div class="card-front"><img src="./img/post-card/postcart-antoine/postcard wywh 2 AB7.png" alt=""></div>
            <div class="card-back"><img src="./img/post-card/postcart-antoine/postcard wywh 2 AB8.png" alt=""></div>
          </div>
        </div>
    </div>
  </div>

  <div class="audio-footer">
    <img  class="radio-toggle" id="radio-toggle" src="./icons/radio-opener.svg" alt="Radio toggle" />
        <div class="custom-player"  id="custom-player">
        <div id="track-title" class="track-title"></div>
          
          <div class="progress-container">
          <button class="play-pause" id="play-pause">
          <img  src="./icons/play-button.svg"/></button>
            <span id="time-current">0:00</span>
            <input type="range" id="progress" value="0" max="100">
            <span id="time-total">0:00</span>
          </div>

          
        </div>
        <audio class="radio-player" id="radio-player"></audio>
  </div> 
`;

/*Ordre important !! */
openHeader();
shuffle();
initializeCards();
initializeHomeSwiper();
intializeRadio();



