import { gsap } from "gsap";

export function openHeader() {
    const logo = document.querySelector('.logo');
    const nav = document.getElementById('main-nav');
    const navItems = nav.querySelectorAll('.nav-item');
    const actuLines = document.querySelector('.actu-lines');
    const lines = actuLines ? actuLines.querySelectorAll('.line') : [];
    const artisteBio = document.querySelector('.artiste_bio');
    const artistPhotoContainer = document.querySelector('.artist-photo-container');
    let isOpen = false;

    logo.addEventListener('click', () => {
       if (!isOpen) {
        // Ouvre le menu
        nav.style.display = "flex";
        
        // Affiche la bio, la photo et actuLines uniquement sur desktop (> 750px)
        if (window.innerWidth > 750) {
            if (actuLines) actuLines.style.display = "flex";
            if (artisteBio) artisteBio.style.display = "flex";
            if (artistPhotoContainer) artistPhotoContainer.style.display = "flex";
        }
        
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

        // Anime actuLines
        if (actuLines && window.innerWidth > 750) {
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

        // Anime la bio avec les mêmes effets que actuLines
        if (artisteBio && window.innerWidth > 750) {
            gsap.to(artisteBio, {
                opacity: 1,
                duration: 0.4,
                ease: "power2.out"
            });

            const bioLines = artisteBio.querySelectorAll('.bio_line');
            gsap.fromTo(bioLines,
              { scaleX: 0, transformOrigin: "left center" },
              {
                scaleX: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
              }
            );
        }
        
        // Anime la photo (apparition progressive)
        if (artistPhotoContainer && window.innerWidth > 750) {
            gsap.fromTo(artistPhotoContainer,
              { opacity: 0, scale: 0.8 },
              {
                opacity: 1,
                scale: 1,
                duration: 0.6,
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

        gsap.to(navItems, {
            x: -50,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.in"
        });

        // Anime la fermeture des actuLines
        if (lines.length > 0 && window.innerWidth > 750) {
            gsap.to(lines, {
                scaleX: 0,
                duration: 0.4,
                stagger: 0.05,
                ease: "power2.in"
            });
        }

        // Anime la fermeture des lignes de bio
        if (artisteBio && window.innerWidth > 750) {
            const bioLines = artisteBio.querySelectorAll('.bio_line');
            gsap.to(bioLines, {
                scaleX: 0,
                duration: 0.4,
                stagger: 0.05,
                ease: "power2.in"
            });
        }

        // Anime la disparition de la photo
        if (artistPhotoContainer && window.innerWidth > 750) {
            gsap.to(artistPhotoContainer, {
                opacity: 0,
                scale: 0.8,
                duration: 0.4,
                ease: "power2.in"
            });
        }

        const elementsToHide = [nav];
        if (actuLines && window.innerWidth > 750) elementsToHide.push(actuLines);
        if (artisteBio && window.innerWidth > 750) elementsToHide.push(artisteBio);
        
        gsap.to(elementsToHide, {
            opacity: 0,
            duration: 0.3,
            delay: (navItems.length * 0.1) + 0.1,
            ease: "power2.in",
            onComplete: () => {
                nav.style.display = "none";
                if (actuLines && window.innerWidth > 750) actuLines.style.display = "none";
                if (artisteBio && window.innerWidth > 750) artisteBio.style.display = "none";
                if (artistPhotoContainer && window.innerWidth > 750) artistPhotoContainer.style.display = "none";
            }
        });

        isOpen = false;
    }
}