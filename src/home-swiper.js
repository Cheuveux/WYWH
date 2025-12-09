import 'swiper/css';
import Swiper from 'swiper';
import { Navigation, Pagination, EffectCoverflow, Keyboard } from 'swiper/modules';
import { postcard } from './3D-postcard.js';

export function initializeHomeSwiper() {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, EffectCoverflow, Keyboard],
    // grabCursor: true,
    centeredSlides: true,
    slidesPerView: '1',
    loop: true,
    speed: 1000,
    spaceBetween: 100,

    // pagination: {
    //   clickable: true,
    // },
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
    if (!content || cardInner.hasChildNodes()) return; // Évite de recharger si déjà chargé

    const [recto, verso] = content.split('|'); // Récupère les URLs recto et verso
    console.log(`Loading 3D content for slide ${slideIndex}:`, recto, verso);
    postcard(cardInner, recto, verso); // Charge l'objet 3D dans le conteneur
  };

  // Charge la carte active et la suivante au démarrage
  loadCardContent(swiper.activeIndex);
  loadCardContent(swiper.activeIndex + 1);

  // Charge les cartes visibles et suivantes lors du changement de slide
  swiper.on('slideChange', () => {
    const activeIndex = swiper.activeIndex;
    loadCardContent(activeIndex);
    loadCardContent(activeIndex + 1);
  });

  return swiper;
}