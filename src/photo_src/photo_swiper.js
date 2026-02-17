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
		direction: 'vertical',
		slidesPerView: 1, 
		centeredSlides: true,
		loop: true,
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
				slidesPerView: 1,
				spaceBetween: 0
			},
			1024: {
				slidesPerView: 1,
				spaceBetween: 0
			}
		}
	});
}