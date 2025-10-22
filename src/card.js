import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initializeCards() {
  const cards = document.querySelectorAll('.card');
 

  // 1️⃣ S'assurer que les cartes sont visibles face avant au départ
  cards.forEach(card => {
    card.classList.remove('flipped');
  });

  // 2️⃣ Permettre le flip au clic
  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

  // 3️⃣ Observer le scroll horizontal ET vertical
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('flipped');
      } else {
        entry.target.classList.add('flipped');
      }
    });
  }, {
    root: null,            
    threshold: 0.5,        
  });

  cards.forEach(card => {
    observer.observe(card);
  });

  cards.forEach(card => {
    const cardInner = card.querySelector('.card-inner');
    const imgFront = card.querySelector('.card-front img');

    if(!cardInner || !imgFront) return;

    if (!imgFront.complete)
    {
      imgFront.addEventListener('load', () => {
        initCardAnimation(cardInner, card);
      });
    }
  });
}