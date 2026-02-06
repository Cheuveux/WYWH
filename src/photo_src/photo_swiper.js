import Swiper from 'swiper';
import {Navigation, Mousewheel, Keyboard, Pagination} from 'swiper/modules';

export function initializePhotoSwiper() {
	const swiperElement = document.querySelector('.photo-swiper')
	
	if (!swiperElement)
	{
		console.warn('Swiper photo non trouve');
		return;
	}
	return new Swiper('.photo-swiper', {
		modules: [Navigation, Pagination, Mousewheel, Keyboard],
		direction: 'horizontal',
		slidesPerView: 1, 
		centeredSlides: true,
		mousewheel: {
			forceToAxis: true,
			sensitivity: 1,
			releaseOnEdges: true
		},
		keyboard: {
			enabled: true,
			onlyInViewport: false
		},
		breakpoints: {
			768: {
				slidesPerView: 1.5,
				spaceBetween: 30
			},
			1024: {
				slidesPerView: 2,
				spaceBetween: 40
			}
		}
	});
}