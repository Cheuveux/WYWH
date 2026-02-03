import '../style.css';
import'../artists.css'
import { openHeader } from '../header';
import { loadArtist } from '../load_artist.js';
import { initCircularNav } from '../circular_nav.js';

export async function render(container)
{
  container.innerHTML = `

 <header class="site-header">
    <h1 class="logo">wishyouwerehere<span>.artists</span></h1>
    <nav id="main-nav" class="main-nav">
     <a class="nav-item" href="/" data-link><span>.world</span></a>
      <a class="nav-item" href="/music" data-link><span>.music</span></a>
      <a class="nav-item" href="/photo" data-link><span>.photo</span></a>
      <a class="nav-item" href="/shop" data-link><span>.shop</span></a>
    </nav>
  </header>

  <div class="artists_name_containeur" id="artists_name_containeur">
      <div class="artists_list">
        <!-- artistes ici (et clones) -->
      </div>
  </div> 
`; 
  
  initCircularNav();
  openHeader();
  loadArtist("artists_name_containeur");

}
