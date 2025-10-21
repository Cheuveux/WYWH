import { gsap } from "gsap";

export  function openHeader() {
    const   menuButton = document.getElementById('menu-button');
    const   nav = document.getElementById('main-nav');
    let     isOpen = false;

    menuButton.addEventListener('click', () => {
       if (!isOpen) {
        gsap.to( nav,
            {
                x: "5%",
                duration: 0.5,
                ease: "power2.out"
            });
       } else {
        gsap.to(nav,
            {
                x: "-100%",
                duartion: 0.5,
                ease: "power2.in"
            });
       }
       isOpen = !isOpen;
    });
}