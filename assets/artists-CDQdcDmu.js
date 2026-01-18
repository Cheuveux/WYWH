import{g as n,o as d,i as l,a as m}from"./themeSwitcher-04_oACBW.js";import{s as v,A as h}from"./config_supabase-Bw7OPEPU.js";async function u(c){const a=document.getElementById(c);if(!a){console.error("container introuvable");return}a.innerHTML="<h1>Loading Artists</h1>";const{data:t,error:o}=await v.from("artistes").select("id, name").order("name",{ascending:!0});if(o){console.error(o),a.innerHTML="<p>Echec de chargement</p>";return}if(!t||t.length===0){a.innerHTML="<p>Aucun artiste trouvé</p>";return}const e=t.map(i=>`
        <div class="artist_name_item" data-id="${i.id}">
            <h1>${i.name}</h1>
        </div>
    `).join("");a.innerHTML=`<div class="artists_list">${e+e+e}</div>`;const s=a.querySelector(".artists_list");s.querySelectorAll(".artist_name_item").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.id;window.location.href=`artist.html?id=${r}`})}),requestAnimationFrame(()=>{const i=s.scrollHeight/2,r=i/30;n.set(s,{y:0}),n.to(s,{y:-i,duration:r,ease:"linear",repeat:-1,modifiers:{y:n.utils.wrap(-i,0)}})})}document.querySelector("#app").innerHTML=`

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
`;d();l();d();h();u("artists_name_containeur");m();
