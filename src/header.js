import { gsap } from "gsap";

export function openHeader() {
    const logo = document.querySelector('.logo'); // Le logo devient le bouton
    const nav = document.getElementById('main-nav');
    const navItems = nav.querySelectorAll('.nav-item'); // Sélectionne tous les liens
    let isOpen = false;

    logo.addEventListener('click', () => {
       if (!isOpen) {
        // Ouvre le menu
        nav.style.display = "flex";
        
        // Animation du conteneur
        gsap.to(nav, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
        });

        // Animation successive des items de la gauche
        gsap.fromTo(navItems, 
          {
            x: -50, // Commence 50px à gauche
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.05, // Délai de 0.15s entre chaque item
            ease: "power2.out"
          }
        );
       } else {
        // Ferme le menu - animation inverse
        gsap.to(navItems, {
            x: -50, // Sort vers la gauche
            opacity: 0,
            duration: 0.4,
            stagger: 0.1, // Délai plus court pour la sortie
            ease: "power2.in"
        });

        // Ferme le conteneur après l'animation des items
        gsap.to(nav, {
            opacity: 0,
            duration: 0.3,
            delay: (navItems.length * 0.1) + 0.1, // Attend que tous les items soient sortis
            ease: "power2.in",
            onComplete: () => {
                nav.style.display = "none";
            }
        });
       }
       isOpen = !isOpen;
    });
}