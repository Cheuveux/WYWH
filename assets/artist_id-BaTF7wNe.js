import{i as c,o,a as l}from"./themeSwitcher-04_oACBW.js";import{s as n,A as m}from"./config_supabase-Bw7OPEPU.js";async function v(){const t=new URLSearchParams(window.location.search).get("id");if(!t){document.getElementById("artist_name").textContent="Artiste introuvable";return}const{data:d,error:s}=await n.from("artistes").select("name").eq("id",t).single();if(s){console.error(s),document.getElementById("artist_name").textContent="Erreur chargement de l'artiste";return}document.getElementById("artist_name").textContent=d.name;const{data:a,error:e}=await n.from("wywh_track_artist").select(`
            track_id,
            wywh_tracks (
                id,
                title,
                audio_url,
                cover_url
            )
        `).eq("artist_id",t);if(e){console.error(e);return}const r=document.getElementById("artist_tracks");if(!a||a.lenght===0){r.innerHTML="<p>Aucune track pour cet artiste</p>";return}r.innerHTML=a.map(i=>`
    <div class="track-item" data-id="${i.wywh_tracks.id}">
      <h2>${i.wywh_tracks.title}</h2>
      <audio controls src="${i.wywh_tracks.audio_url}">
        Votre navigateur ne supporte pas l’audio.
      </audio>
    </div>
  `).join("")}document.querySelector("#app").innerHTML=`
 <header class="site-header">
    <h1 class="logo">wishyouwerehere<span>.artist</span></h1>
    <nav id="main-nav" class="main-nav">
      <a class="nav-item" href="/WYWH/index.html"><span>.world</span></a>
      <a class="nav-item" href="/WYWH/music.html"><span>.music</span></a>
      <a class="nav-item" href="/WYWH/photo.html"><span>.photo</span></a>
      <a class="nav-item" href="/WYWH/artists.html"><span>.artists</span></a>
      <a class="nav-item" href="/WYWH/shop.html"><span>.shop</span></a>
    </nav>
  </header>

    <div class = "artist_content" id = "artist_content">
        <div class = "artist_name" id = "artist_name"></div>
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
`;c();o();m();document.addEventListener("DOMContentLoaded",()=>{v()});l();
