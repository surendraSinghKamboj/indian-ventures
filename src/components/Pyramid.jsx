import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Pyramid = () => {
  const containerRef = useRef();

  useEffect(() => {
    let frameId;
    let pyramid;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.ConeGeometry(1, 2, 4);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    pyramid = new THREE.Mesh(geometry, material);
    scene.add(pyramid);

    camera.position.z = 5;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      pyramid.rotation.x += 0.01;
      pyramid.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default Pyramid;
