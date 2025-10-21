import { gsap } from "gsap";

export function shuffle() {
    const container = document.querySelector(".swiper-wrapper");
    if(!container) return;

    const items = Array.from(container.children);
    const shuffled = items.sort(() => Math.random() - 0.5);

    container.innerHTML = '';
    shuffled.forEach(item => container.appendChild(item));

    gsap.from(".swiper-slide", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out"
    });
}