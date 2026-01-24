import{i as m,o as u,a as v}from"./themeSwitcher-C337WcwA.js";import{s as c,A as p}from"./config_supabase-DSp5UNws.js";import{l as h}from"./calling_tracks_from_supabase-DBrrW_cU.js";import{i as _}from"./ciruclar_nav-DFhP10pE.js";async function g(){const i=new URLSearchParams(window.location.search),s=Number(i.get("id"));if(!s){document.getElementById("artist_name").textContent="Artiste introuvable";return}const{data:t,error:o}=await c.from("artistes").select("name, bio_title, bio_summary, bio_details, bio_end, photo_artist").eq("id",s).single();if(o){console.error(o),document.getElementById("artist_name").textContent="Erreur chargement de l'artiste";return}document.getElementById("artist_name").textContent=t.name;const{data:n,error:l}=await c.from("wywh_track_artist").select("artist_id");console.log("Test db :",n,l);const{data:e,error:r}=await c.from("wywh_track_artist").select(`
		track_id,
		wywh_tracks (
			id,
			title,
			audio_url,
			cover_url
		)
	`).eq("artist_id",s);if(console.log("trackLinks:",e,"tracksError:",r),console.log("artistID raw:",i.get("id")),console.log("artistID Number:",Number(i.get("id"))),r){console.error(r);return}const d=document.getElementById("artist_tracks");if(!e||e.length===0){d.innerHTML="<p>Aucune track pour cet artiste</p>";return}if(d.innerHTML=e.map(a=>`
    <div class="track_item" data-id="${a.wywh_tracks.id}">
	<img src=${a.wywh_tracks.cover_url} class="music_cover">
      <h2>${a.wywh_tracks.title}</h2>
      <audio  src="${a.wywh_tracks.audio_url}">
        Votre navigateur ne supporte pas l’audio.
      </audio>
    </div>
  `).join(""),document.getElementById("actu-1").textContent=t.bio_title||"",document.getElementById("actu-2").textContent=t.bio_summary||"",document.getElementById("actu-3").textContent=t.bio_details||"",document.getElementById("actu-4").textContent=t.bio_end||"",t.photo_artist){const a=document.createElement("img");a.src=t.photo_artist,a.className="artist-photo",document.getElementById("artist-photo-container").appendChild(a)}}document.querySelector("#app").innerHTML=`
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
        	<div class="artist-photo-container" id="artist-photo-container"></div>
            <div class = "actu-lines" id = "actu-lines">
                <div class="line actu-1" id="actu-1"></div>
                <div class="line actu-2" id="actu-2"></div>
                <div class="line actu-3" id="actu-3"></div>
                <div class="line actu-4">
                    <div class ="short_line4">Short</div>
                    <div class ="long_line4" id="actu-4"></div>
                </div>
            </div>
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
`;m();_();p();g();u();const y=v();h("music-playlist",(i,s)=>{y.playUrl(i),document.querySelectorAll(".music-item.active").forEach(t=>t.classList.remove("active")),s.classList.add("active")});
