import{s as u}from"./config_supabase-DSp5UNws.js";async function v(i,s){const e=document.getElementById(i);if(!e){console.error(`Container #${i} not found`);return}try{e.innerHTML='<p style="color: var(--text-color); text-align:center"> Chargement des pistes...</p>';const{data:a,error:o}=await u.from("wywh_tracks").select(`
                id,
                title,
                audio_url,
                cover_url,
                project,
                wywh_track_artist (
                artistes (
                    id,
                    name
                )
                )
            `).order("order",{ascending:!0});if(o)throw o;if(!a||a.length===0){e.innerHTML='<p style="color: var(--text-color); text-align: center;"> Aucune Piste disponible pour le moment sorrrry</p>';return}const n=t=>t.wywh_track_artist?.map(r=>r.artistes.name).join(", ")||"Artiste inconnu";e.innerHTML=a.map(t=>{const r=n(t);return`
    <div class="music-item"
         data-audio="${t.audio_url}"
         data-title="${t.title}"
         data-artist="${r}"
         data-cover="${t.cover_url}">
      <div class="music-cover">
        <img src="${t.cover_url}" alt="${t.title}">
      </div>
      <div class="music-info">
        <div class="music-title">
          <h1>${t.title}</h1>
        </div>
        <div class="music-2nd-info">
          <a class="music-artist">${r}</a>
          <a class="music-project">${t.project}</a>
        </div>
      </div>
    </div>
  `}).join(""),s&&e.querySelectorAll(".music-item").forEach(t=>{t.addEventListener("click",()=>{const r=t.getAttribute("data-audio"),c=t.getAttribute("data-title"),l=t.getAttribute("data-artist"),d=t.getAttribute("data-cover");r&&(s(r,t),m(c,l,d))})}),console.log(`✅ ${a.length} pistes chargées depuis Supabase`)}catch(a){console.error("Erreur lors du chargement des tracks :",a),e.innerHTML='<p style="color: var(--text-color); text-align: center;"> Erreur de chargement</p>'}}function m(i,s,e){"mediaSession"in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:i,artist:s,artwork:[{src:e,sizes:"512x512",type:"image/jpeg"}]}))}export{v as l};
