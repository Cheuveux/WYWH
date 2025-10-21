import 'swiper/css';
import Swiper from 'swiper';
import {Navigation, Pagination, EffectCoverflow, Keyboard} from 'swiper/modules';

export function initializeHomeSwiper() {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination, EffectCoverflow, Keyboard],
        //effect:'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: '1',
        loop:true,
        speed: 1000,
        spaceBetween: 100,
        
        /*coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },*/

        pagination:{
            clickable: true,
        },
        keyboard:{
            enabled: true,
            onlyInViewport: true,
        },
    });
    return swiper;
}