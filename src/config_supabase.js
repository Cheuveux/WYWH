import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey)
{
	console.error("Variables manquantes ou erronnees dans le fichier .env ! BELEK !!");
	throw new Error('Supabase configuration is missing');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
console.log('SUpabase correctement conenecte a : ', supabaseUrl);