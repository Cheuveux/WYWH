import './style.css';
import'./artists.css'
import { openHeader } from './header';
import { intializeRadio } from './radio.js';
import { AnimRadio } from './anim_radio.js';
import { initThemeSwitcher } from './themeSwitcher.js';
import { loadTracksFromSupabase } from './calling_tracks_from_supabase.js';
import { animArtist } from './anim_artist_generic.js';

document.querySelector('#app').innerHTML = `

 <header class="site-header">
    <h1 class="logo">wishyouwerehere<span>.artists</span></h1>
    <nav id="main-nav" class="main-nav">
      <a class="nav-item" href="${import.meta.env.BASE_URL}index.html"><span>.world</span></a>
      <a class="nav-item" href="${import.meta.env.BASE_URL}music.html"><span>.music</span></a>
      <a class="nav-item" href="${import.meta.env.BASE_URL}photo.html"><span>.photo</span></a>
      <a class="nav-item" href="${import.meta.env.BASE_URL}shop.html"><span>.shop</span></a>
    </nav>
  </header>

  <div class = "artists_name_containeur">
  <div class = "artist_name_item">Element 1</div>
  <div class = "artist_name_item">Element 1</div>
  <div class = "artist_name_item">Element 1</div>
  <div class = "artist_name_item">Element 1</div>
  <div class = "artist_name_item">Element 1</div>
  <div class = "artist_name_item">Element 1</div>
  <div class = "artist_name_item">Element 1</div>
  <div class = "artist_name_item">Element 1</div>
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

openHeader();

initThemeSwitcher();
openHeader();
AnimRadio();
animArtist();
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
