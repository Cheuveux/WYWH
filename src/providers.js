import './style.css';
import'./providers.css'
import { openHeader } from './header';
import { providerCard } from './providersCard';


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

<div class="provider-caroussel">

        <div class="provider-card">
          <div class ="card-header">
            <h1>Pierre la Pierre</h1>
          </div>
          <div class="provider-portrait">
            <img src="./img/alex.png" alt="" class="provider-portrait">
          </div>
          <div class="provider-footer">
            <h1>wishyouwerehere.providers</h1>
          </div>
        </div>

        <div class="provider-card">
          <div class ="card-header">
            <h1>Zeke man</h1>
          </div>
          <div class="provider-portrait">
            <img src="./img/mark.jpg" alt="" class="provider-portrait">
          </div>
          <div class="provider-footer">
            <h1>wishyouwerehere.providers</h1>
          </div>
        </div>

        <div class="provider-card">
          <div class ="card-header">
            <h1>Cheveut</h1>
          </div>
          <div class="provider-portrait">
            <img src="./img/yuto.jpg" alt="" class="provider-portrait">
          </div>
          <div class="provider-footer">
            <h1>wishyouwerehere.providers</h1>
          </div>
        </div>

        <div class="provider-card">
          <div class ="card-header">
            <h1>Pierre la Pierre</h1>
          </div>
          <div class="provider-portrait">
            <img src="./img/alex.png" alt="" class="provider-portrait">
          </div>
          <div class="provider-footer">
            <h1>wishyouwerehere.providers</h1>
          </div>
        </div>

        <div class="provider-card">
          <div class ="card-header">
            <h1>Zeke man</h1>
          </div>
          <div class="provider-portrait">
            <img src="./img/mark.jpg" alt="" class="provider-portrait">
          </div>
          <div class="provider-footer">
            <h1>wishyouwerehere.providers</h1>
          </div>
        </div>

        <div class="provider-card">
          <div class ="card-header">
            <h1>Cheveut</h1>
          </div>
          <div class="provider-portrait">
            <img src="./img/yuto.jpg" alt="" class="provider-portrait">
          </div>
          <div class="provider-footer">
            <h1>wishyouwerehere.providers</h1>
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

openHeader();
providerCard();

