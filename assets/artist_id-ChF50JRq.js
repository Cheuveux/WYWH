import{i as m,o as u,a as v}from"./themeSwitcher-DDB_Opo8.js";import{s as e,A as h}from"./config_supabase-lXi46aFV.js";async function p(){const s=new URLSearchParams(window.location.search),i=Number(s.get("id"));if(!i){document.getElementById("artist_name").textContent="Artiste introuvable";return}const{data:n,error:c}=await e.from("artistes").select("name").eq("id",i).single();if(c){console.error(c),document.getElementById("artist_name").textContent="Erreur chargement de l'artiste";return}document.getElementById("artist_name").textContent=n.name;const{data:d,error:l}=await e.from("wywh_track_artist").select("artist_id");console.log("Test db :",d,l);const{data:t,error:r}=await e.from("wywh_track_artist").select(`
            track_id,
            wywh_tracks (
                id,
                title,
                audio_url,
                cover_url
            )
        `).eq("artist_id",i);if(console.log("trackLinks:",t,"tracksError:",r),console.log("artistID raw:",s.get("id")),console.log("artistID Number:",Number(s.get("id"))),r){console.error(r);return}const o=document.getElementById("artist_tracks");if(!t||t.length===0){o.innerHTML="<p>Aucune track pour cet artiste</p>";return}o.innerHTML=t.map(a=>`
    <div class="track_item" data-id="${a.wywh_tracks.id}">
	<img src=${a.wywh_tracks.cover_url} class="music_cover">
      <h2>${a.wywh_tracks.title}</h2>
      <audio  src="${a.wywh_tracks.audio_url}">
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
`;m();u();h();p();v();
