import{i as t,o as e,a as c}from"./themeSwitcher-04_oACBW.js";import{A as r}from"./config_supabase-Bw7OPEPU.js";import{l as d}from"./calling_tracks_from_supabase-BynlQZtd.js";document.querySelector("#app").innerHTML=`

 <header class="site-header">
    <h1 class="logo">wishyouwerehere<span>.photo</span></h1>
    <nav id="main-nav" class="main-nav">
      <a class="nav-item" href="/WYWH/index.html"><span>.world</span></a>
      <a class="nav-item" href="/WYWH/music.html"><span>.music</span></a>
      <a class="nav-item" href="/WYWH/artists.html"><span>.artists</span></a>
      <a class="nav-item" href="/WYWH/shop.html"><span>.shop</span></a>
    </nav>
  </header>


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

`;t();e();r();const l=c();d("music-playlist",(a,i)=>{l.playUrl(a),document.querySelectorAll(".music-item.active").forEach(s=>s.classList.remove("active")),i.classList.add("active")});
