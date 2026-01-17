import{g as t,o as e,i as d,a as l}from"./themeSwitcher-04_oACBW.js";import{A as c,l as n}from"./calling_tracks_from_supabase-DtQzOUT9.js";function o(){const s=document.querySelectorAll(".artist_name_item");document.querySelector(".artists_name_containeur").offsetHeight;const a=Array.from(s).reduce((i,r)=>i+r.offsetHeight,0);t.to(".artists_name_containeur",{y:`-${a/2}px`,duration:10,ease:"none",repeat:-1,modifiers:{y:t.utils.unitize(i=>parseFloat(i)%(a/2))}})}document.querySelector("#app").innerHTML=`

 <header class="site-header">
    <h1 class="logo">wishyouwerehere<span>.artists</span></h1>
    <nav id="main-nav" class="main-nav">
      <a class="nav-item" href="/WYWH/index.html"><span>.world</span></a>
      <a class="nav-item" href="/WYWH/music.html"><span>.music</span></a>
      <a class="nav-item" href="/WYWH/photo.html"><span>.photo</span></a>
      <a class="nav-item" href="/WYWH/shop.html"><span>.shop</span></a>
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
`;e();d();e();c();o();const m=l();n("music-playlist",(s,a)=>{m.playUrl(s),document.querySelectorAll(".music-item.active").forEach(i=>i.classList.remove("active")),a.classList.add("active")});
