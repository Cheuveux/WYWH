import { gsap } from "gsap";

export function openHeader() {
    const logo = document.querySelector('.logo');
    const nav = document.getElementById('main-nav');
    const navItems = nav.querySelectorAll('.nav-item');
    const actuLines = document.querySelector('.actu-lines');
    const lines = actuLines ? actuLines.querySelectorAll('.line') : [];
    const artistPhoto = document.querySelector('.artist-photo');
    let isOpen = false;

    logo.addEventListener('click', () => {
       if (!isOpen) {
        // Ouvre le menu
        nav.style.display = "flex";
        if (actuLines && window.innerWidth > 750) 
            actuLines.style.display = "flex";
        if(artistPhoto)
            artistPhoto.style.display = "flex";
        
        // ✅ Ouvre aussi la météo de la slide active
        const activeSlide = document.querySelector('.swiper-slide-active');
        if (activeSlide) {
            const locationElement = activeSlide.querySelector('.location');
            if (locationElement) {
                const ville = locationElement.textContent.trim();
                console.log('📍 Ouverture météo pour:', ville);
                // Déclenche un événement custom pour weather.js
                window.dispatchEvent(new CustomEvent('open-weather', { detail: { ville } }));
            }
        }
        
        gsap.to(nav, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
        });

        // Anime les lignes
        if (actuLines) {
            gsap.to(actuLines, {
                opacity: 1,
                duration: 0.4,
                ease: "power2.out"
            });

            gsap.fromTo(lines,
              { scaleX: 0, transformOrigin: "left center" },
              {
                scaleX: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
              }
            );
        }

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
        
        // ✅ Ouvre le diagramme circulaire (desktop uniquement)
        window.dispatchEvent(new CustomEvent('toggle-circular-nav'));
        
        isOpen = true;
       } else {
        closeNav();
       }
    });

    window.addEventListener('close-navigation', () => {
        if (isOpen) {
            console.log('🔄 Fermeture automatique du menu (changement de slide)');
            closeNav();
        }
    });

    function closeNav() {
        if (!isOpen) return;

        // ✅ Ferme aussi le widget météo
        window.dispatchEvent(new CustomEvent('close-weather'));
        
        // ✅ Ferme aussi le diagramme circulaire
        window.dispatchEvent(new CustomEvent('header-closing'));

        if(artistPhoto)
            artistPhoto.style.display = "none";
        gsap.to(navItems, {
            x: -50,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.in"
        });

        // Anime la fermeture des lignes
        if (lines.length > 0) {
            gsap.to(lines, {
                scaleX: 0,
                duration: 0.4,
                stagger: 0.05,
                ease: "power2.in"
            });
        }

        const elementsToHide = actuLines ? [nav, actuLines] : [nav];
        
        gsap.to(elementsToHide, {
            opacity: 0,
            duration: 0.3,
            delay: (navItems.length * 0.1) + 0.1,
            ease: "power2.in",
            onComplete: () => {
                nav.style.display = "none";
                if (actuLines) actuLines.style.display = "none";
            }
        });

        isOpen = false;
    }
}