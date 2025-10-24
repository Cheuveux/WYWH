import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export function init3DCarousel() {
  const container = document.querySelector(".provider-caroussel");
  console.log('[3D] init start, container=', container);
  if (!container) return console.warn('[3D] .provider-caroussel introuvable');

  // Ensure container has size
  const rect = container.getBoundingClientRect();
  const width = rect.width || Math.max(window.innerWidth * 0.8, 600);
  const height = rect.height || Math.max(window.innerHeight * 0.5, 400);

  // Scene & camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
  camera.position.set(0, 2, 18);
  camera.lookAt(0, 0, 0);

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  renderer.setSize(width, height);
  // style canvas to fill container
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  renderer.domElement.style.display = "block";
  renderer.domElement.style.position = "absolute";
  renderer.domElement.style.left = "0";
  renderer.domElement.style.top = "0";
  renderer.domElement.style.zIndex = "0";

  // make container positioned so absolute canvas fits it
  const prevPos = getComputedStyle(container).position;
  if (prevPos === "static") container.style.position = "relative";

  // insert canvas as first child so HTML cards (if any) can sit above
  container.insertBefore(renderer.domElement, container.firstChild);

  // Light
  const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
  hemi.position.set(0, 20, 0);
  scene.add(hemi);
  const dir = new THREE.DirectionalLight(0xffffff, 0.8);
  dir.position.set(0, 10, 10);
  scene.add(dir);

  // Geometry
  const geometry = new THREE.PlaneGeometry(3, 4);

  const cards = [];
  const cardElements = container.querySelectorAll(".provider-card");
  const COUNT = cardElements.length;

  cardElements.forEach((cardEl, i) => {
    // Create a canvas to render the card content
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const width = 300;
    const height = 400;
    canvas.width = width;
    canvas.height = height;

    // Fill background with computed background color or white
    const style = getComputedStyle(cardEl);
    ctx.fillStyle = style.backgroundColor || "#ffffff";
    ctx.fillRect(0, 0, width, height);

    // Optionally, draw text or other content if needed
    // For simplicity, draw the card's text content in black
    ctx.fillStyle = style.color || "#000000";
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const text = cardEl.textContent.trim();
    if(text) {
      const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
      const lineHeight = 24;
      lines.forEach((line, idx) => {
        ctx.fillText(line, width / 2, height / 2 - ((lines.length - 1) * lineHeight) / 2 + idx * lineHeight);
      });
    }

    // Create texture from canvas
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.needsUpdate = true;

    // use DoubleSide to avoid invisible faces
    const material = new THREE.MeshStandardMaterial({ map: texture, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geometry, material);

    const angle = (i / COUNT) * Math.PI * 2;
    const radius = 8;
    mesh.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);

    // orient toward camera so faces are visible from viewer
    mesh.lookAt(camera.position);

    scene.add(mesh);
    cards.push(mesh);
  });

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.2;
  controls.target.set(0, 0, 0);

  // handle resize based on container
  function onResize() {
    const r = container.getBoundingClientRect();
    const w = r.width || window.innerWidth;
    const h = r.height || window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener("resize", onResize);

  // Render loop
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  console.log('[3D] initialized — canvas appended. cards:', cards.length);
}