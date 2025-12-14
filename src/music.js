import './style.css';
import './music.css';
import { openHeader } from './header';
import { intializeRadio } from './radio.js';
import { AnimRadio } from './anim_radio.js';

document.querySelector('#app').innerHTML = `

  <header class="site-header">
    <h1 class="logo"><img src ="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/icons/menu-icons/Logo%20PNG.svg"/></h1>
    <nav id="main-nav" class="main-nav">
      <a class="nav-item" href="${import.meta.env.BASE_URL}music.html">wishyouwerehere<span>.music</span></a>
      <a class="nav-item" href="${import.meta.env.BASE_URL}photo.html">wishyouwerehere<span>.photo</span></a>
      <a class="nav-item" href="${import.meta.env.BASE_URL}providers.html">wishyouwerehere<span>.providers</span></a>
      <a class="nav-item" href="${import.meta.env.BASE_URL}providers.html">wishyouwerehere<span>.shop</span></a>
    </nav>
  </header>

<div class="music-playlist">
        
  
  <div class="music-item" data-audio="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/music/music-track/808ADAM%20-%20AFTER%20ft.%20Pico%20%26%20Lowkey.wav">
    <div class="music-cover"><img src="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/music/music-cover/808adam_Lowkey_pico_after.jpg" alt=""></div>
    <div class="music-info">
      <div class="music-title"><h1>After</h1></div>
      <div class="music-2nd-info">
        <a class="music-artist">808 Adam, Pico</a>
        <a class="music-project">After-Single</a>
      </div>
    </div>
  </div>
  
  <div class="music-item" data-audio="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/music/music-track/808ADAM%2C%20Chateau%20Rouge%20-%20Martyr%20remix.wav">
    <div class="music-cover">
      <img src="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/music/music-cover/Chateau_rrouge_martrys_remix_808adam.jpg" alt="">
    </div>
    <div class="music-info">
      <div class="music-title"><h1>Martyr (remix) </h1></div>
      
        <div class = "music-2nd-info">
          <a href="./src/providers.js" class="music-artist">808 Adam, Chateau Rouge</a>
          <a href="./src/details/music/" class="music-project">Martyr (remix) - Single</a>
        </div>
    </div>
  </div>

  <div class="music-item" data-audio="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/music/music-track/Lowkey%2C%20808ADAM%20-%20Celestia.wav">
    <div class="music-cover">
      <img src="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/music/music-cover/loweky_support_808adam.jpg" alt="">
    </div>
    <div class="music-info">
      <div class="music-title"><h1>Celestia</h1></div>
      
        <div class = "music-2nd-info">
          <a href="./src/providers.js" class="music-artist">Lowkey, 808 Adam</a>
          <a href="./src/details/music/" class="music-project">LOWKEYSUPPORTS - EP</a>
        </div>
    </div>
  </div>
  
  <div class="music-item" data-audio="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/music/music-track/Lowkey%2C%20808ADAM%20-%20Tout%20changer.wav">
    <div class="music-cover">
      <img src="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/music/music-cover/loweky_support_808adam.jpg" alt="">
    </div>
    <div class="music-info">
      <div class="music-title"><h1>Tout Changer</h1></div>
      
        <div class = "music-2nd-info">
          <a href="./src/providers.js" class="music-artist">Lowkey, 808 Adam</a>
          <a href="./src/details/music/" class="music-project">LOWKEYSUPPORTS - EP</a>
        </div>
      </div>
  </div>

  <div class="music-item" data-audio = "https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/music/music-track/808ADAM%20-%20Aquarius.wav">
    <div class="music-cover" >
      <img src="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/music/music-cover/Escape_808adam.jpg" alt="">
    </div>
    <div class="music-info">
      <div class="music-title"><h1>Aquarius</h1></div>
      
        <div class = "music-2nd-info">
          <a href="./src/providers.js" class="music-artist">808 Adam</a>
          <a href="./src/details/music/" class="music-project">Escape - EP</a>
        </div>
      </div>
  </div>

  <div class="music-item" data-audio = "https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/music/music-track/808ADAM%20-%20Slow.wav">
    <div class="music-cover">
      <img src="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/music/music-cover/slow_808adam.jpg" alt="">
    </div>
    <div class="music-info">
      <div class="music-title"><h1>Slow</h1></div>
      
        <div class = "music-2nd-info">
          <a href="./src/providers.js" class="music-artist">808 Adam</a>
          <a href="./src/details/music/" class="music-project">Slow - Single</a>
        </div>
      </div>
  </div>

  <div class="music-item" data-audio="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/music/music-track/808ADAM%20-%20SIDE%20ft.%20Pico.wav">
    <div class="music-cover">
      <img src="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/music/music-cover/Escape_808adam.jpg" alt="">
    </div>
    <div class="music-info">
      <div class="music-title"><h1>Side ft. Pico</h1></div>
      
        <div class = "music-2nd-info">
          <a href="./src/providers.js" class="music-artist">808 Adam</a>
          <a href="./src/details/music/" class="music-project">Escape - EP</a>
        </div>
      </div>
  </div>

  <div class="music-item" data-audio="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/music/music-track/AntoineBertoli%2CLowkey%2CP2000-%20Underwater.wav">
    <div class="music-cover">
      <img src="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/music/music-cover/underwater_bertoli.jpg" alt="">
    </div>
    <div class="music-info">
      <div class="music-title"><h1>Slow ft. Pico, P2000</h1></div>
      
        <div class = "music-2nd-info">
          <a href="./src/providers.js" class="music-artist">Bertoli</a>
          <a href="./src/details/music/" class="music-project">Slow ft. Pico, P2000 - Single</a>
        </div>
      </div>
  </div>
 


</div>

<div class="audio-footer">
    <img  class="radio-toggle" id="radio-toggle" src="https://pub-e38587f10dd74235986dd93b16c10e06.r2.dev/icons/radio-icons/radio%20wywh.svg" alt="Radio toggle" />
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
AnimRadio();

// initialise le player et récupère l'API
const radio = intializeRadio();

// Attacher les listeners sur les items pour jouer la piste associée
document.querySelectorAll('.music-item').forEach(item => {
  item.addEventListener('click', () => {
    const src = item.getAttribute('data-audio');
    if (!src) return;
    radio.playUrl(src);

    // marque visuellement l'item actif (facultatif)
    document.querySelectorAll('.music-item.active').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});