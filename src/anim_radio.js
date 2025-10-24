import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AnimRadio() {
    const scroller = document.querySelector('.music-playlist');
    if (!scroller) return;

    const items = Array.from(scroller.querySelectorAll('.music-item'));
    if (!items.length) return;

    // état initial pour éviter le flash
    gsap.set(items, { autoAlpha: 0, y: 18, scale: 0.995 });

    items.forEach((item, i) => {
        gsap.fromTo(item,
            { autoAlpha: 0, y: 18, scale: 0.995 },
            {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    scroller: scroller,               // utilise le conteneur .music-playlist
                    start: "top 85%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse",
                    // markers: true,                 // décommente pour debug
                }
            }
        );
    });

    ScrollTrigger.refresh();
}