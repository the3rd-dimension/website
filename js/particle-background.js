import * as THREE from 'https://unpkg.com/three@0.165.0/build/three.module.js';

const mount = document.getElementById('particleBackground');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (mount) {
  try {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 200);
    camera.position.z = 58;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const particleCount = window.innerWidth < 768 ? 130 : 260;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const colorA = new THREE.Color('#6ea8ff');
    const colorB = new THREE.Color('#f3f6ff');
    const colorC = new THREE.Color('#4b7cf7');

    for (let i = 0; i < particleCount; i += 1) {
      const index = i * 3;
      positions[index] = (Math.random() - 0.5) * 110;
      positions[index + 1] = (Math.random() - 0.5) * 68;
      positions[index + 2] = (Math.random() - 0.5) * 42;

      const mixed = colorA.clone().lerp(Math.random() > 0.72 ? colorB : colorC, Math.random() * 0.65);
      colors[index] = mixed.r;
      colors[index + 1] = mixed.g;
      colors[index + 2] = mixed.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: window.innerWidth < 768 ? 0.18 : 0.23,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const pointer = { x: 0, y: 0 };
    const targetPointer = { x: 0, y: 0 };
    let scrollInfluence = 0;
    let animationFrame = 0;

    const handlePointerMove = (event) => {
      targetPointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      targetPointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.size = window.innerWidth < 768 ? 0.18 : 0.23;
    };

    const animate = () => {
      animationFrame = window.requestAnimationFrame(animate);

      pointer.x += (targetPointer.x - pointer.x) * 0.035;
      pointer.y += (targetPointer.y - pointer.y) * 0.035;
      scrollInfluence += (window.scrollY * 0.00014 - scrollInfluence) * 0.04;

      if (!reduceMotion) {
        points.rotation.y += 0.00075;
        points.rotation.x = pointer.y * 0.035 + scrollInfluence;
        points.rotation.z = pointer.x * 0.025;
      }

      renderer.render(scene, camera);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('resize', resize, { passive: true });
    animate();

    window.addEventListener('beforeunload', () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', resize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    });
  } catch (error) {
    mount.style.display = 'none';
  }
}
