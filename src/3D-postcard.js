import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function postcard(container, rectoPath, versoPath) {
  if (!container) return;

  const textureLoader = new THREE.TextureLoader();

  // ✅ Configuration pour préserver les couleurs originales
  const rectoTexture = textureLoader.load(
    rectoPath,
    (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      console.log(`Recto texture loaded: ${rectoPath}`);
    },
    undefined,
    (err) => {
      console.error(`Error loading recto texture: ${rectoPath}`, err);
    }
  );

  const versoTexture = textureLoader.load(
    versoPath,
    (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      console.log(`Verso texture loaded: ${versoPath}`);
    },
    undefined,
    (err) => {
      console.error(`Error loading verso texture: ${versoPath}`, err);
    }
  );

  // === Détection responsive ===
  const isMobile = window.innerWidth < 768;
  const cardWidth = isMobile ? 5 : 10;
  const cardHeight = isMobile ? 3.5 : 7;

  // === Géométrie et matériaux NATURELS ===
  const geometry = new THREE.PlaneGeometry(cardWidth, cardHeight);
  
  // ✅ MeshBasicMaterial = rendu fidèle sans éclairage artificiel
  const materialRecto = new THREE.MeshBasicMaterial({ 
    map: rectoTexture,
    side: THREE.FrontSide,
    toneMapped: false
  });
  
  const materialVerso = new THREE.MeshBasicMaterial({ 
    map: versoTexture,
    side: THREE.FrontSide,
    toneMapped: false
  });

  const meshRecto = new THREE.Mesh(geometry, materialRecto);
  const meshVerso = new THREE.Mesh(geometry, materialVerso);
  meshVerso.rotation.y = Math.PI;

  const cardGroup = new THREE.Group();
  cardGroup.add(meshRecto);
  cardGroup.add(meshVerso);

  const scene = new THREE.Scene();
  scene.add(cardGroup);

  // === Caméra ===
  const camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 0.1, 100);
  const cameraDistance = isMobile ? 9 : 14;
  camera.position.set(0, 0, cameraDistance);

  // === Rendu avec paramètres optimisés ===
  const renderer = new THREE.WebGLRenderer({ 
    antialias: true, 
    alpha: true,
    preserveDrawingBuffer: true
  });
  
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  container.appendChild(renderer.domElement);

  // === Contrôles orbitaux ===
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.maxDistance = cameraDistance;
  controls.minDistance = cameraDistance;

  // === Variables pour l'état de la carte ===
  let isFlipped = false;
  let isAnimating = false;

  // === Variables pour détecter le drag vs click ===
  let mouseDownPosition = { x: 0, y: 0 };
  let hasDragged = false;

  // ✅ DÉTECTION DU DRAG
  renderer.domElement.addEventListener('mousedown', (event) => {
    mouseDownPosition = { x: event.clientX, y: event.clientY };
    hasDragged = false;
  });

  renderer.domElement.addEventListener('mousemove', (event) => {
    if (mouseDownPosition.x !== 0 || mouseDownPosition.y !== 0) {
      const deltaX = Math.abs(event.clientX - mouseDownPosition.x);
      const deltaY = Math.abs(event.clientY - mouseDownPosition.y);
      
      // Si mouvement > 5px, c'est un drag
      if (deltaX > 5 || deltaY > 5) {
        hasDragged = true;
      }
    }
  });

  // ✅ CLIC (sans drag) = RESET
  renderer.domElement.addEventListener('mouseup', (event) => {
    if (!hasDragged) {
      console.log('🖱️ Clic détecté - Reset au recto');
      clearTimeout(resetTimeout);
      resetToFront();
    }
    mouseDownPosition = { x: 0, y: 0 };
    hasDragged = false;
  });

  // ✅ SUPPORT TACTILE (mobile)
  let touchStartPosition = { x: 0, y: 0 };
  let touchHasDragged = false;

  renderer.domElement.addEventListener('touchstart', (event) => {
    if (event.touches.length === 1) {
      touchStartPosition = { 
        x: event.touches[0].clientX, 
        y: event.touches[0].clientY 
      };
      touchHasDragged = false;
    }
  });

  renderer.domElement.addEventListener('touchmove', (event) => {
    if (event.touches.length === 1 && touchStartPosition.x !== 0) {
      const deltaX = Math.abs(event.touches[0].clientX - touchStartPosition.x);
      const deltaY = Math.abs(event.touches[0].clientY - touchStartPosition.y);
      
      if (deltaX > 5 || deltaY > 5) {
        touchHasDragged = true;
      }
    }
  });

  renderer.domElement.addEventListener('touchend', (event) => {
    if (!touchHasDragged) {
      console.log('👆 Tap détecté - Reset au recto');
      clearTimeout(resetTimeout);
      resetToFront();
    }
    touchStartPosition = { x: 0, y: 0 };
    touchHasDragged = false;
  });

  // === Variables pour l'auto-reset ===
  let isUserInteracting = false;
  let resetTimeout;

  controls.addEventListener('start', () => {
    isUserInteracting = true;
    clearTimeout(resetTimeout);
  });

  controls.addEventListener('end', () => {
    isUserInteracting = false;
    resetTimeout = setTimeout(() => {
      console.log('⏱️ Auto-reset après inactivité');
      resetToFront();
    }, 2000); // 2 secondes d'inactivité
  });

  // ✅ FONCTION : Remet toujours côté RECTO de face
  function resetToFront() {
    if (isAnimating) {
      console.log('⚠️ Animation déjà en cours, ignoré');
      return;
    }
    
    console.log('🔄 Début animation reset au recto');
    isAnimating = true;
    isFlipped = false;
    
    const resetDuration = 600; // Plus rapide : 600ms
    const startRotation = {
      x: cardGroup.rotation.x,
      y: cardGroup.rotation.y,
      z: cardGroup.rotation.z,
    };
    
    // ✅ Cible toujours 0,0,0 = RECTO de face
    const targetRotation = {
      x: 0,
      y: 0,
      z: 0
    };

    const startTime = Date.now();

    function animateReset() {
      if (isUserInteracting) {
        console.log('⚠️ Animation interrompue par utilisateur');
        isAnimating = false;
        return;
      }
      
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / resetDuration, 1);
      
      // Easing ease-in-out
      const easeProgress = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;
      
      cardGroup.rotation.x = startRotation.x + (targetRotation.x - startRotation.x) * easeProgress;
      cardGroup.rotation.y = startRotation.y + (targetRotation.y - startRotation.y) * easeProgress;
      cardGroup.rotation.z = startRotation.z + (targetRotation.z - startRotation.z) * easeProgress;

      if (progress < 1) {
        requestAnimationFrame(animateReset);
      } else {
        console.log('✅ Animation terminée - Carte au recto');
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
    const newCameraDistance = newIsMobile ? 9 : 14;

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
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
}