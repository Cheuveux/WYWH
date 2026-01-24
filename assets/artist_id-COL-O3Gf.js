import{i as m,o as u,a as v}from"./themeSwitcher-Dynd2dVD.js";import{s as o,A as _}from"./config_supabase-9SlIWOXG.js";import{i as h}from"./ciruclar_nav-kO_hrfJu.js";async function p(){const s=new URLSearchParams(window.location.search),a=Number(s.get("id"));if(!a){document.getElementById("artist_name").textContent="Artiste introuvable";return}const{data:t,error:e}=await o.from("artistes").select("name, bio_title, bio_summary, bio_details, bio_end, photo_artist").eq("id",a).single();if(e){console.error(e),document.getElementById("artist_name").textContent="Erreur chargement de l'artiste";return}document.getElementById("artist_name").textContent=t.name;const{data:n,error:l}=await o.from("wywh_track_artist").select("artist_id");console.log("Test db :",n,l);const{data:r,error:c}=await o.from("wywh_track_artist").select(`
		track_id,
		wywh_tracks (
			id,
			title,
			audio_url,
			cover_url
		)
	`).eq("artist_id",a);if(console.log("trackLinks:",r,"tracksError:",c),console.log("artistID raw:",s.get("id")),console.log("artistID Number:",Number(s.get("id"))),c){console.error(c);return}const d=document.getElementById("artist_tracks");if(!r||r.length===0){d.innerHTML="<p>Aucune track pour cet artiste</p>";return}if(d.innerHTML=r.map(i=>`
    <div class="track_item music-item" data-id="${i.wywh_tracks.id}" data-audio="${i.wywh_tracks.audio_url}">
        <img src="${i.wywh_tracks.cover_url}" class="music_cover">
        <div class="music-info">
            <div class="music-title">
                <h1>${i.wywh_tracks.title}</h1>
            </div>
            <div class="music-artist">${t.name}</div>
        </div>
        <audio src="${i.wywh_tracks.audio_url}">
            Votre navigateur ne supporte pas l'audio.
        </audio>
    </div>
`).join(""),document.getElementById("actu-1").textContent=t.bio_title||"",document.getElementById("actu-2").textContent=t.bio_summary||"",document.getElementById("actu-3").textContent=t.bio_details||"",document.getElementById("actu-4").textContent=t.bio_end||"",t.photo_artist){const i=document.createElement("img");i.src=t.photo_artist,i.className="artist-photo",document.getElementById("artist-photo-container").appendChild(i)}}document.querySelector("#app").innerHTML=`
 <header class="site-header">
    <h1 class="logo">
        wishyouwerehere.<span id="artist_name"></span>
    </h1>
    <nav id="main-nav" class="main-nav">
      <a class="nav-item" href="/WYWH/index.html"><span>.world</span></a>
      <a class="nav-item" href="/WYWH/music.html"><span>.music</span></a>
      <a class="nav-item" href="/WYWH/photo.html"><span>.photo</span></a>
      <a class="nav-item" href="/WYWH/artists.html"><span>.artists</span></a>
      <a class="nav-item" href="/WYWH/shop.html"><span>.shop</span></a>
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
`;m();h();_();u();const g=v();p().then(()=>{const s=document.querySelectorAll(".track_item.music-item");s.forEach(a=>{a.addEventListener("click",()=>{const t=a.getAttribute("data-audio");t&&(g.playUrl(t),document.querySelectorAll(".music-item.active").forEach(e=>e.classList.remove("active")),a.classList.add("active"))})}),console.log(`✅ ${s.length} tracks de l'artiste chargées`)});
