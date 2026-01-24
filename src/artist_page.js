import { supabase } from './config_supabase.js'

export async function fetchArtist() {

	//lecture de l'id depuis la db
	const	params = new URLSearchParams(window.location.search);
	const artistID = Number(params.get('id'));

	if (!artistID)
	{
		document.getElementById('artist_name').textContent = "Artiste introuvable"
		return ;
	}

	//chargement des infos de l'artiste
	const {data: artist, error: artistError} = await supabase
		.from('artistes')
		.select('name, bio_title, bio_summary, bio_details, bio_end, photo_artist')
		.eq('id', artistID)
		.single();
	if (artistError)
	{
		console.error(artistError);
		document.getElementById('artist_name').textContent = "Erreur chargement de l'artiste";
		return;
	}
	
	document.getElementById('artist_name').textContent = artist.name;
	
	const {data, error} = await supabase
	.from('wywh_track_artist')
	.select('artist_id')
	
	console.log("Test db :", data, error);


	// chargement des tracks lies a cet artiste via la table de liaiso
	const {data: trackLinks, error: tracksError} = await supabase
	.from('wywh_track_artist')
	.select(`
		track_id,
		wywh_tracks (
			id,
			title,
			audio_url,
			cover_url
		)
	`)
	.eq('artist_id', artistID);
	console.log("trackLinks:", trackLinks, "tracksError:", tracksError);
	console.log("artistID raw:", params.get('id'));
	console.log("artistID Number:", Number(params.get('id'))); 
	if (tracksError)
	{
		console.error(tracksError);
		return;
	}
	
	const container = document.getElementById('artist_tracks');
	if(!trackLinks || trackLinks.length === 0)
	{
		container.innerHTML = "<p>Aucune track pour cet artiste</p>";
		return;
	}

	//affichage des tracks
	container.innerHTML = trackLinks.map(link => `
    <div class="track_item music-item" data-id="${link.wywh_tracks.id}" data-audio="${link.wywh_tracks.audio_url}">
        <img src="${link.wywh_tracks.cover_url}" class="music_cover">
        <div class="music-info">
            <div class="music-title">
                <h1>${link.wywh_tracks.title}</h1>
            </div>
            <div class="music-artist">${artist.name}</div>
        </div>
        <audio src="${link.wywh_tracks.audio_url}">
            Votre navigateur ne supporte pas l'audio.
        </audio>
    </div>
`).join('');

  //affichage du contenu descriptif de l'artiste
  document.getElementById('actu-1').textContent = artist.bio_title || "";
  document.getElementById('actu-2').textContent = artist.bio_summary || "";
  document.getElementById('actu-3').textContent = artist.bio_details|| "";
  document.getElementById('actu-4').textContent = artist.bio_end|| "";
 
	if (artist.photo_artist) {
		const photoArtist = document.createElement('img');
		photoArtist.src = artist.photo_artist;
		photoArtist.className = "artist-photo";
		document.getElementById('artist-photo-container').appendChild(photoArtist);
}
}

