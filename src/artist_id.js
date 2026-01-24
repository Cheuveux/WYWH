import './style.css';
import './artist_id.css';
import { openHeader } from './header';
import { intializeRadio } from './radio.js';
import { AnimRadio } from './anim_radio.js';
import { initThemeSwitcher } from './themeSwitcher.js';
import { loadTracksFromSupabase } from './calling_tracks_from_supabase.js';
import { fetchArtist } from './artist_page.js'
import { initCircularNav } from './ciruclar_nav.js';

document.querySelector('#app').innerHTML = `
 <header class="site-header">
    <h1 class="logo">
        wishyouwerehere.<span id="artist_name"></span>
    </h1>
    <nav id="main-nav" class="main-nav">
      <a class="nav-item" href="${import.meta.env.BASE_URL}index.html"><span>.world</span></a>
      <a class="nav-item" href="${import.meta.env.BASE_URL}music.html"><span>.music</span></a>
      <a class="nav-item" href="${import.meta.env.BASE_URL}photo.html"><span>.photo</span></a>
      <a class="nav-item" href="${import.meta.env.BASE_URL}artists.html"><span>.artists</span></a>
      <a class="nav-item" href="${import.meta.env.BASE_URL}shop.html"><span>.shop</span></a>
    </nav>
  </header>

   <div class="main_content_artist" id="main_content_artist">
        <div class = "artist_content" id = "artist_content">
            <div class = "artist_tracks" id = "artist_tracks"></div>
            <div class = "artiste_bio" id = "artiste_bio">
                <div class="bio_line actu-1" id="actu-1"></div>
                <div class="bio_line actu-2" id="actu-2"></div>
                <div class="bio_line actu-3" id="actu-3"></div>
                <div class="bio_line actu-4" id="actu-4">
                    <div class ="bio_short_line4">Short</div>
                    <div class ="bio_long_line4"></div>
                </div>
            </div>
        	<div class="artist-photo-container" id="artist-photo-container"></div>
            <div class="artists_reco" id="artist_reco"></div>
        </div>

        <div class="artiste_reco">
            <div class=""></div>
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

initThemeSwitcher();
initCircularNav();
AnimRadio();
openHeader();

// Initialise le player
const radio = intializeRadio();

// ✅ Attends que fetchArtist() termine avant d'attacher les clics
fetchArtist().then(() => {
  // ✅ Attache les événements de clic sur les tracks de l'artiste
  const trackItems = document.querySelectorAll('.track_item.music-item');
  
  trackItems.forEach(item => {
    item.addEventListener('click', () => {
      const audioUrl = item.getAttribute('data-audio');
      
      if (audioUrl) {
        // Joue la track
        radio.playUrl(audioUrl);
        
        // Marque visuellement l'item actif
        document.querySelectorAll('.music-item.active').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      }
    });
  });
  
  console.log(`✅ ${trackItems.length} tracks de l'artiste chargées`);
});