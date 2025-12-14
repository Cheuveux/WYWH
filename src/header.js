import { gsap } from "gsap";

export function openHeader() {
    const logo = document.querySelector('.logo');
    const nav = document.getElementById('main-nav');
    const navItems = nav.querySelectorAll('.nav-item');
    let isOpen = false;

    logo.addEventListener('click', () => {
       if (!isOpen) {
        // Ouvre le menu
        nav.style.display = "flex";
        
        gsap.to(nav, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
        });

        gsap.fromTo(navItems, 
          {
            x: -50,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.out"
          }
        );
        
        isOpen = true;
       } else {
        closeNav();
       }
    });

    // ✅ ÉCOUTE L'ÉVÉNEMENT DE FERMETURE DEPUIS home-swiper.js
    window.addEventListener('close-navigation', () => {
        if (isOpen) {
            console.log('🔄 Fermeture automatique du menu (changement de slide)');
            closeNav();
        }
    });

    // ✅ FONCTION POUR FERMER LE MENU
    function closeNav() {
        if (!isOpen) return;

        gsap.to(navItems, {
            x: -50,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.in"
        });

        gsap.to(nav, {
            opacity: 0,
            duration: 0.3,
            delay: (navItems.length * 0.1) + 0.1,
            ease: "power2.in",
            onComplete: () => {
                nav.style.display = "none";
            }
        });

        isOpen = false;
    }
}