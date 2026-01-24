import{i as t,o as e,a as r}from"./themeSwitcher-Dynd2dVD.js";import{A as c}from"./config_supabase-9SlIWOXG.js";import{l}from"./calling_tracks_from_supabase-rAMExU7h.js";import{i as d}from"./ciruclar_nav-kO_hrfJu.js";document.querySelector("#app").innerHTML=`
  <header class="site-header">
    <h1 class="logo">wishyouwerehere<span>.music</span></h1>
    <nav id="main-nav" class="main-nav">
      <a class="nav-item" href="/WYWH/index.html"><span>.world</span></a>
      <a class="nav-item" href="/WYWH/photo.html"><span>.photo</span></a>
      <a class="nav-item" href="/WYWH/artists.html"><span>.artists</span></a>
      <a class="nav-item" href="/WYWH/shop.html"><span>.shop</span></a>
    </nav>
  </header>

  <div class="music-playlist" id="music-playlist">
    <!-- Les tracks seront chargées dynamiquement -->
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
`;t();e();c();d();const o=r();l("music-playlist",(a,i)=>{o.playUrl(a),document.querySelectorAll(".music-item.active").forEach(s=>s.classList.remove("active")),i.classList.add("active")});
