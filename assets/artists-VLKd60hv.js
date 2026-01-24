import{o as c,i as m,a as v}from"./themeSwitcher-Dynd2dVD.js";import{s as p,A as h}from"./config_supabase-9SlIWOXG.js";async function u(o){const a=document.getElementById(o);if(!a){console.error("container introuvable");return}a.innerHTML="<h1>Loading Artists</h1>";const{data:e,error:r}=await p.from("artistes").select("id, name").order("name",{ascending:!0});if(r){console.error(r),a.innerHTML="<p>Echec de chargement</p>";return}if(!e||e.length===0){a.innerHTML="<p>Aucun artiste trouvé</p>";return}const s=document.createElement("div");s.className="artists_list";function d(i){const t=document.createElement("div");t.className="artist_name_item",t.dataset.id=i.id;const n=document.createElement("h1");return n.textContent=i.name,t.appendChild(n),t.addEventListener("click",()=>{window.location.href=`artist_id.html?id=${i.id}`}),t}e.forEach(i=>{const t=d(i);s.appendChild(t)});const l=2;for(let i=0;i<l;i++)e.forEach(t=>{const n=d(t);s.appendChild(n)});a.innerHTML="",a.appendChild(s)}document.querySelector("#app").innerHTML=`

 <header class="site-header">
    <h1 class="logo">wishyouwerehere<span>.artists</span></h1>
    <nav id="main-nav" class="main-nav">
      <a class="nav-item" href="/WYWH/index.html"><span>.world</span></a>
      <a class="nav-item" href="/WYWH/music.html"><span>.music</span></a>
      <a class="nav-item" href="/WYWH/photo.html"><span>.photo</span></a>
      <a class="nav-item" href="/WYWH/shop.html"><span>.shop</span></a>
    </nav>
  </header>

  <div class="artists_name_containeur" id="artists_name_containeur">
  <div class="artists_list">
    <!-- artistes ici (et clones) -->
  </div>
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
`;c();m();c();h();document.addEventListener("DOMContentLoaded",()=>{u("artists_name_containeur")});v();
