import './style.css';
import './music.css';
import { openHeader } from './header';
import { intializeRadio } from './radio.js';
import { AnimRadio } from './anim_radio.js';
import { initThemeSwitcher } from './themeSwitcher.js';
import { loadTracksFromSupabase } from './calling_tracks_from_supabase.js';

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <h1 class="logo">wishyouwerehere<span>.music</span></h1>
    <nav id="main-nav" class="main-nav">
      <a class="nav-item" href="${import.meta.env.BASE_URL}index.html"><span>.world</span></a>
      <a class="nav-item" href="${import.meta.env.BASE_URL}photo.html"><span>.photo</span></a>
      <a class="nav-item" href="${import.meta.env.BASE_URL}artists.html"><span>.artists</span></a>
      <a class="nav-item" href="${import.meta.env.BASE_URL}shop.html"><span>.shop</span></a>
    </nav>
  </header>

  <div class="music-playlist" id="music-playlist">
    <!-- Les tracks seront chargées dynamiquement -->
  </div>

  <div class="audio-footer">
    <img class="radio-toggle" id="radio-toggle" src="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/icons/radio-icons/radio%20wywh.svg" alt="Radio toggle" />
    <div class="custom-player" id="custom-player">
      <div id="track-title" class="track-title"></div>
      <div class="progress-container">
        <button class="play-pause" id="play-pause">
          <img src="./icons/play-button.svg"/>
        </button>
        <span id="time-current">0:00</span>
        <input type="range" id="progress" value="0" max="100">
        <span id="time-total">0:00</span>
      </div>
    </div>
    <audio class="radio-player" id="radio-player"></audio>
  </div> 
`;

initThemeSwitcher();
openHeader();
AnimRadio();

// Initialise le player
const radio = intializeRadio();

// ✅ Charge les tracks depuis Supabase
loadTracksFromSupabase('music-playlist', (audioUrl, item) => {
  // Joue la track
  radio.playUrl(audioUrl);
  
  // Marque visuellement l'item actif
  document.querySelectorAll('.music-item.active').forEach(i => i.classList.remove('active'));
  item.classList.add('active');
});