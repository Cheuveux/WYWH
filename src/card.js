export function initializeCards() {
 // Logique pour retourner les cartes
  const cards = document.querySelectorAll('.card');
  const carroussel = document.querySelector('.home-carroussel');

  // 1. Retourner au clic
  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

  // 2. Retourner au scroll horizontal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('flipped');
      } else {
        entry.target.classList.remove('flipped');
      }
    });
  }, {
    root: carroussel,
    threshold: 0.8,
  });

  cards.forEach(card => {
    observer.observe(card);
  });

}