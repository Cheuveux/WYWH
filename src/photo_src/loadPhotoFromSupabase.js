import { supabase } from '../config_supabase.js';

/**
 * Chargement des cartes photo depuis Supabase
 * @returns {Promise<Array>} Array de cartes photo
 */

export async function loadPhotoFromSupabase() {

	try {
            const { data, error } = await supabase
                .from('wywh_photo')
                .select(`
                    photo_id,
					artist_id, 
					photo_back,
					photo_front,
					localisation,
					created_at,
					wywh_photo_artist(
					artistes (
						id,
						name
					)
					)
                `)
                // .order('order', { ascending: true });
            
            if (error) throw error;

			console.log( `🍎 ${data.length} cartes postales charges depuis Supabase`);
			return data || [];
    } catch (error) {
        console.error("Erreur lors du chargement des tracks :", error);
        return [];
    }
	
}

// Generation du HTML pour carte postale photo
export function generatePhotoCard(photo) {
	console.log('photo: ', photo);
	const artistNames = photo.wywh_photo_artist
	?.map(pa => pa.artistes?.name)
	.filter(Boolean)
	.join(', ') || 'Artiste inconnu';
	return `
		<div class="swiper-slide">
			<div class="card" data-content="${photo.photo_front}|${photo.photo_back}">
				<div class="card-inner"></div>
			</div>
			<h2 class="project-info">
				<a href= "" class="artist-info">${artistNames}</a>
				<p>-</p>
				<a href=-"" clas="location">${photo.localisation}</a>
			</h2>
		</div>
	`;
}