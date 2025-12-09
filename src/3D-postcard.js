import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function postcard(container, rectoPath, versoPath) {
  if (!container) return;

  const textureLoader = new THREE.TextureLoader();

  // Charge la texture recto
  const rectoTexture = textureLoader.load(
    rectoPath,
    () => {
      console.log(`Recto texture loaded: ${rectoPath}`);
    },
    undefined,
    (err) => {
      console.error(`Error loading recto texture: ${rectoPath}`, err);
    }
  );

  // Charge la texture verso
  const versoTexture = textureLoader.load(
    versoPath,
    () => {
      console.log(`Verso texture loaded: ${versoPath}`);
    },
    undefined,
    (err) => {
      console.error(`Error loading verso texture: ${versoPath}`, err);
    }
  );

  // === Détection responsive : mobile vs desktop ===
  const isMobile = window.innerWidth < 768;
  const cardWidth = isMobile ? 5 : 10;
  const cardHeight = isMobile ? 3.5 : 7;

  // === Géométrie et matériaux ===
  const geometry = new THREE.PlaneGeometry(cardWidth, cardHeight);
  const materialRecto = new THREE.MeshStandardMaterial({ map: rectoTexture });
  const materialVerso = new THREE.MeshStandardMaterial({ map: versoTexture });

  const meshRecto = new THREE.Mesh(geometry, materialRecto);
  const meshVerso = new THREE.Mesh(geometry, materialVerso);
  meshVerso.rotation.y = Math.PI;

  // Groupe pour gérer la rotation de la carte
  const cardGroup = new THREE.Group();
  cardGroup.add(meshRecto);
  cardGroup.add(meshVerso);

  const scene = new THREE.Scene();
  scene.add(cardGroup);

  // === Ajout de lumières ===
  const ambientLight = new THREE.AmbientLight(0xFFfffF, 3);
  scene.add(ambientLight);

  // === Lumière directionnelle uniquement pour le verso ===
  const backLight = new THREE.DirectionalLight(0xFeeeeF, 0.5); // Lumière blanche intense
  backLight.position.set(0, 0, -5); // Positionnée derrière la carte (côté verso)
  backLight.target = cardGroup; // Cible le groupe de la carte
  scene.add(backLight);

  // Limite la lumière au verso uniquement
  meshVerso.material = new THREE.MeshStandardMaterial({ 
    map: versoTexture,
    side: THREE.FrontSide // Affecte seulement la face visible
  });

  // Le recto reste avec la lumière ambiante uniquement
  meshRecto.material = new THREE.MeshStandardMaterial({ 
    map: rectoTexture,
    side: THREE.FrontSide,
    emissive: 0x000000, // Pas d'émission
    emissiveIntensity: 0 // Pas d'effet lumineux propre
  });

  // === Caméra ===
  const camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 0.1, 100);
  const cameraDistance = isMobile ? 12 : 14;
  camera.position.set(0, 0, cameraDistance);

  // === Rendu ===
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // === Contrôles orbitaux ===
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = false;
  controls.enablePan = false; // Empêche le déplacement
  controls.maxDistance = cameraDistance;
  controls.minDistance = cameraDistance;

  // === Variables pour l'état de la carte ===
  let isFlipped = false; // false = recto visible, true = verso visible
  let isAnimating = false; // Empêche les clics pendant l'animation

  // === Fonction pour retourner la carte ===
  function flipCard() {
    if (isAnimating) return; // Empêche les clics multiples

    isAnimating = true;
    isFlipped = !isFlipped;

    const flipDuration = 800; // Durée de l'animation en ms
    const startRotation = {
      x: cardGroup.rotation.x,
      y: cardGroup.rotation.y,
      z: cardGroup.rotation.z
    };
    
    const targetRotation = {
      x: 0, // Remet bien de face sur l'axe X
      y: isFlipped ? Math.PI : 0, // π = verso, 0 = recto
      z: 0 // Remet bien de face sur l'axe Z
    };

    const startTime = Date.now();

    function animateFlip() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / flipDuration, 1);

      // Interpolation avec effet "ease-in-out" pour une animation plus fluide
      const easeProgress = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;

      cardGroup.rotation.x = startRotation.x + (targetRotation.x - startRotation.x) * easeProgress;
      cardGroup.rotation.y = startRotation.y + (targetRotation.y - startRotation.y) * easeProgress;
      cardGroup.rotation.z = startRotation.z + (targetRotation.z - startRotation.z) * easeProgress;

      if (progress < 1) {
        requestAnimationFrame(animateFlip);
      } else {
        isAnimating = false;
      }
    }

    animateFlip();
  }

  // === Gestion du clic sur le canvas ===
  renderer.domElement.addEventListener('click', (event) => {
    // Annule le timer de reset automatique si actif
    clearTimeout(resetTimeout);
    
    // Réinitialise la position de la carte (bien de face)
    resetCardPosition();
  });

  // === Variables pour l'auto-reset ===
  let isUserInteracting = false;
  let resetTimeout;

  // Détecte quand l'utilisateur commence à interagir
  controls.addEventListener('start', () => {
    isUserInteracting = true;
    clearTimeout(resetTimeout);
  });

  // Détecte quand l'utilisateur arrête d'interagir
  controls.addEventListener('end', () => {
    isUserInteracting = false;
    // Lance le reset après 1 seconde d'inactivité
    resetTimeout = setTimeout(() => {
      resetCardPosition();
    }, 1000);
  });

  // Fonction pour réinitialiser la carte
  function resetCardPosition() {
    if (isAnimating) return; // Empêche les animations multiples
    
    isAnimating = true;
    
    const resetDuration = 800; // Durée de l'animation
    const startRotation = {
      x: cardGroup.rotation.x,
      y: cardGroup.rotation.y,
      z: cardGroup.rotation.z,
    };
    
    // Réinitialise bien de face selon l'état (recto ou verso)
    const targetRotation = {
      x: 0,
      y: isFlipped ? Math.PI : 0, // Garde l'état actuel (recto ou verso)
      z: 0
    };

    const startTime = Date.now();

    function animateReset() {
      if (isUserInteracting) {
        isAnimating = false;
        return;
      }
      
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / resetDuration, 1);
      
      // Interpolation avec effet "ease-in-out"
      const easeProgress = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;
      
      cardGroup.rotation.x = startRotation.x + (targetRotation.x - startRotation.x) * easeProgress;
      cardGroup.rotation.y = startRotation.y + (targetRotation.y - startRotation.y) * easeProgress;
      cardGroup.rotation.z = startRotation.z + (targetRotation.z - startRotation.z) * easeProgress;

      if (progress < 1) {
        requestAnimationFrame(animateReset);
      } else {
        isAnimating = false;
      }
    }

    animateReset();
  }

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  // === Gestion du redimensionnement responsive ===
  window.addEventListener('resize', () => {
    const newIsMobile = window.innerWidth < 768;
    const newCardWidth = newIsMobile ? 5 : 10;
    const newCardHeight = newIsMobile ? 3.5 : 7;
    const newCameraDistance = newIsMobile ? 7 : 15;

    if (geometry.parameters.width !== newCardWidth) {
      geometry.dispose();
      const newGeometry = new THREE.PlaneGeometry(newCardWidth, newCardHeight);
      meshRecto.geometry = newGeometry;
      meshVerso.geometry = newGeometry;
    }

    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.position.set(0, 0, newCameraDistance);
    camera.updateProjectionMatrix();

    controls.maxDistance = newCameraDistance;
    controls.minDistance = newCameraDistance;

    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
  });
}