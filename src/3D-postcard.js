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
  const cameraDistance = isMobile ? 7 : 14;
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
  
  // ✅ Assure que le container a des dimensions avant de render
  const width = container.offsetWidth || (isMobile ? 350 : 900);
  const height = container.offsetHeight || (isMobile ? 250 : 640);
  
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  container.appendChild(renderer.domElement);

  // === Contrôles orbitaux ===
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = isMobile;
  controls.enablePan = false;
  controls.maxDistance = cameraDistance * 2; 
  controls.minDistance = cameraDistance * (isMobile ? 0.5 : 1);

  // === Variables pour l'état de la carte ===
  let isAnimating = false;

  // ✅ RESET AUTOMATIQUE DÈS QU'ON RELÂCHE (OrbitControls 'end')
  controls.addEventListener('end', () => {
    console.log('🔄 Relâchement détecté - Reset au recto');
    resetToFront();
  });

  // ✅ FONCTION : Remet toujours côté RECTO de face
  function resetToFront() {
    if (isAnimating) {
      console.log('⚠️ Animation déjà en cours, ignoré');
      return;
    }
    
    console.log('🔄 Début animation reset au recto');
    isAnimating = true;
    
    const resetDuration = 600;
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

    const width = container.offsetWidth || (newIsMobile ? 350 : 900);
    const height = container.offsetHeight || (newIsMobile ? 250 : 640);

    camera.aspect = width / height;
    camera.position.set(0, 0, newCameraDistance);
    camera.updateProjectionMatrix();

    controls.maxDistance = newCameraDistance;
    controls.minDistance = newCameraDistance;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
}