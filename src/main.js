import './style.css'
import { intializeRadio } from './radio.js';
import { router } from './router.js';
import {initThemeSwitcher} from './themeSwitcher.js'

// Import des pages
import * as homePage from './pages/home.js';
import * as musicPage from './pages/music.js';
import * as photoPage from './pages/photo.js';
import * as artistsPage from './pages/artists.js';
import * as artistIdPage from './pages/artist_id.js'; 

//  Initialise la radio UNE SEULE FOIS
const radio = intializeRadio();
window.wywhRadio = radio;

initThemeSwitcher();
//  Enregistre les routes
router.register('/', homePage.render);
router.register('/music', musicPage.render);
router.register('/photo', photoPage.render);
router.register('/artists', artistsPage.render);
router.register('/artists/:id', artistIdPage.render); 

// ✅ 3. Démarre le routeur
router.init();


