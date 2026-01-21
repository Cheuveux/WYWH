import { supabase } from './config_supabase.js'

export async function fetchArtist() {

	//lecture de l'id depuis la db
	const	params = new URLSearchParams(window.location.search);
	const	artistID = params.get('id');

	if (!artistID)
	{
		document.getElementById('artist_name').textContent = "Artiste introuvable"
		return ;
	}

	//chargement des infos de l'artiste
	const {data: artist, error: artistError} = await supabase
		.from('artistes')
		.select('name')
		.eq('id', artistID)
		.single();
	if (artistError)
	{
		console.error(artistError);
		document.getElementById('artist_name').textContent = "Erreur chargement de l'artiste";
		return;
	}
	document.getElementById('artist_name').textContent = artist.name;
	

	// chargement des tracks lies a cet artiste via la table de liaisom
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
        
        if (tracksError)
        {
            console.error(tracksError);
            return;
        }
		
		const container = document.getElementById('artist_tracks');
		if(!trackLinks || trackLinks.lenght === 0)
		{
			container.innerHTML = "<p>Aucune track pour cet artiste</p>";
			return;
		}

	//affichage des tracks
	container.innerHTML = trackLinks.map(link => `
    <div class="track-item" data-id="${link.wywh_tracks.id}">
      <h2>${link.wywh_tracks.title}</h2>
      <audio controls src="${link.wywh_tracks.audio_url}">
        Votre navigateur ne supporte pas l’audio.
      </audio>
    </div>
  `).join('');
}

