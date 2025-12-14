import 'swiper/css';
import Swiper from 'swiper';
import { Navigation, Pagination, EffectCoverflow, Keyboard } from 'swiper/modules';
import { postcard } from './3D-postcard.js';

export function initializeHomeSwiper() {
  
  const isMobile = window.innerWidth < 768;
  
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, EffectCoverflow, Keyboard],
    centeredSlides: true,
    slidesPerView: '1',
    loop: true,
    speed: 1000,
    spaceBetween: 100,

    direction :  isMobile ? 'vertical' : 'horizontal',
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  const loadCardContent = (slideIndex) => {
    const slide = swiper.slides[slideIndex];
    if (!slide) return;

    const card = slide.querySelector('.card');
    const cardInner = card.querySelector('.card-inner');
    const content = card.getAttribute('data-content');
    if (!content || cardInner.hasChildNodes()) return;

    const [recto, verso] = content.split('|');
    console.log(`Loading 3D content for slide ${slideIndex}:`, recto, verso);
    postcard(cardInner, recto, verso);
  };

  loadCardContent(swiper.activeIndex);
  loadCardContent(swiper.activeIndex + 1);

  // ✅ Charge les cartes visibles et ferme menu + météo lors du changement
  swiper.on('slideChange', () => {
    const activeIndex = swiper.activeIndex;
    
    loadCardContent(activeIndex);
    loadCardContent(activeIndex + 1);
    
    // ✅ DISPATCH DES ÉVÉNEMENTS (au lieu d'appeler des fonctions)
    console.log('🔄 Slide changée - Fermeture du menu et météo');
    window.dispatchEvent(new CustomEvent('close-navigation'));
    window.dispatchEvent(new CustomEvent('close-weather'));
  });

  return swiper;
}