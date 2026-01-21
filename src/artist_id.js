import './style.css';
import './artist_id.css';
import { openHeader } from './header';
import { intializeRadio } from './radio.js';
import { AnimRadio } from './anim_radio.js';
import { initThemeSwitcher } from './themeSwitcher.js';
import { loadTracksFromSupabase } from './calling_tracks_from_supabase.js';
import { fetchArtist } from './artist_page.js'

document.querySelector('#app').innerHTML = `
 <header class="site-header">
    <h1 class="logo">wishyouwerehere<span>.artist</span></h1>
    <nav id="main-nav" class="main-nav">
      <a class="nav-item" href="${import.meta.env.BASE_URL}index.html"><span>.world</span></a>
      <a class="nav-item" href="${import.meta.env.BASE_URL}music.html"><span>.music</span></a>
      <a class="nav-item" href="${import.meta.env.BASE_URL}photo.html"><span>.photo</span></a>
      <a class="nav-item" href="${import.meta.env.BASE_URL}artists.html"><span>.artists</span></a>
      <a class="nav-item" href="${import.meta.env.BASE_URL}shop.html"><span>.shop</span></a>
    </nav>
  </header>

    <div class = "artist_content" id = "artist_content">
        <h1 class = "artist_name" id = "artist_name"></h1>
        <div class = "artist_tracks" id = "artist_tracks"></div>
        <div class = "artist_bio" id = "artist_bio"></div>
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

initThemeSwitcher();
openHeader();
AnimRadio();
fetchArtist();

// Initialise le player
const radio = intializeRadio();