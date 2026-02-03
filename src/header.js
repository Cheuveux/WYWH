import { gsap } from "gsap";

// ✅ WeakMap pour tracker chaque logo individuellement
const logoListeners = new WeakMap();
let isOpen = false; // ✅ Variable globale pour l'état du menu

export function openHeader() {
    const logo = document.querySelector('.logo');
    const nav = document.getElementById('main-nav');
    
    if (!nav) {
        console.warn('⚠️ Navigation non trouvée');
        return;
    }
    
    const navItems = nav.querySelectorAll('.nav-item');
    const actuLines = document.querySelector('.actu-lines');
    const lines = actuLines ? actuLines.querySelectorAll('.line') : [];
    const artisteBio = document.querySelector('.artiste_bio');
    const artistPhotoContainer = document.querySelector('.artist-photo-container');

    // ✅ N'ajoute le listener que si ce logo ne l'a pas encore
    if (logo && !logoListeners.has(logo)) {
        console.log('🟢 Ajout du listener sur le logo');
        
        logo.addEventListener('click', toggleHeader);
        logoListeners.set(logo, true); // ✅ Marque ce logo comme initialisé
        
        // ✅ Écoute l'événement de fermeture seulement une fois
        window.addEventListener('close-navigation', handleCloseNavigation);
    }

    function toggleHeader() {
        console.log('🔴 Logo cliqué ! isOpen:', isOpen);
        if (!isOpen) {
            openNav();
        } else {
            closeNav();
        }
    }

    function handleCloseNavigation() {
        if (isOpen) {
            console.log('🔄 Fermeture automatique du menu');
            closeNav();
        }
    }

    function openNav() {
        console.log('🟢 Ouverture du menu');
        if (!nav) return;
        
        nav.style.display = "flex";
        
        if (window.innerWidth > 750) {
            if (actuLines) actuLines.style.display = "flex";
            if (artisteBio) artisteBio.style.display = "flex";
            if (artistPhotoContainer) artistPhotoContainer.style.display = "flex";
        }
        
        const activeSlide = document.querySelector('.swiper-slide-active');
        if (activeSlide) {
            const locationElement = activeSlide.querySelector('.location');
            if (locationElement) {
                const ville = locationElement.textContent.trim();
                console.log('📍 Ouverture météo pour:', ville);
                window.dispatchEvent(new CustomEvent('open-weather', { detail: { ville } }));
            }
        }
        
        gsap.to(nav, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
        });

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
        
        window.dispatchEvent(new CustomEvent('toggle-circular-nav'));
        
        isOpen = true;
    }

    function closeNav() {
        console.log('🔴 Fermeture du menu');
        if (!isOpen || !nav) return;

        window.dispatchEvent(new CustomEvent('close-weather'));
        window.dispatchEvent(new CustomEvent('header-closing'));

        gsap.to(navItems, {
            x: -50,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.in"
        });

        if (lines.length > 0 && window.innerWidth > 750) {
            gsap.to(lines, {
                scaleX: 0,
                duration: 0.4,
                stagger: 0.05,
                ease: "power2.in"
            });
        }

        if (artisteBio && window.innerWidth > 750) {
            const bioLines = artisteBio.querySelectorAll('.bio_line');
            gsap.to(bioLines, {
                scaleX: 0,
                duration: 0.4,
                stagger: 0.05,
                ease: "power2.in"
            });
        }

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