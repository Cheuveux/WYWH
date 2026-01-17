import { gsap } from "gsap";
export function animArtist() {

	const	items = document.querySelectorAll('.artist_name_item');
	const	containerHeight = document.querySelector('.artists_name_containeur').offsetHeight;
	const	totalHeight = Array.from(items).reduce((acc, el) => acc + el.offsetHeight, 0);

	gsap.to('.artists_name_containeur', {
		y: `-${totalHeight / 2}px`,
		duration: 10,
		ease: "none",
		repeat: -1,
		modifiers: {
			y: gsap.utils.unitize(y =>parseFloat(y) % (totalHeight / 2))
		}
	});
}