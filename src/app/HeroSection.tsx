'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import './globals.css'

// === 3D EARTH SPHERE COMPONENT === //
const HeroSection: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current?.appendChild(renderer.domElement);

    // Create Earth mesh
    const texture = new THREE.TextureLoader().load('/2k_earth_nightmap.jpg');
    const geometry = new THREE.SphereGeometry(2.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    camera.position.z = 8;

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040, 3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Handle screen resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute z-[-1] pointer-events-none"
      style={{
        top: '50%',
        left: '50%',
        transform: 'translate(-40%, -60%)',
        width: '100vw',
        height: '100vh',
      }}
    />
  )
}

// === HERO CONTENT WITH TEXT AND EARTH === //
const HeroSectionContent: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 relative min-h-screen bg-black text-white overflow-hidden">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-6 py-6 sm:px-16 sm:py-8 md:px-24">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/logo.svg" alt="Logo" width={150} height={36} />
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white text-black p-2 rounded-full hover:scale-105 transition">
            <FaGooglePlay size={18} />
          </button>
          <button className="bg-white text-black p-2 rounded-full hover:scale-105 transition">
            <FaApple size={18} />
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="absolute top-0 left-0 z-5 flex items-center justify-center px-6 py-8 sm:px-16 sm:py-10 md:mx-[80px] md:mt-[44px]">
        <div className="mt-24 sm:mt-36 md:mt-48 max-w-xl md:max-w-2xl lg:max-w-3xl flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text Section */}
            <div className="w-full md:w-[60%] md:pl-[120px] flex flex-col items-center md:items-start text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.2] tracking-wide"
              >
                Track any <br className="hidden md:block"/>                Vessel,Anywhere!
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="mt-6 z-11 text-[#AAAAAA] text-base md:text-lg leading-[1.75]"
              >
                Stay ahead of the waves!
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-10 z-20 px-8 py-4 text-base tracking-wider font-normal bg-[#0A84FF] rounded-full shadow-lg text-white transition hover:bg-blue-700"
              >
                Try for free
              </motion.button>
            </div>

            {/* Earth Sphere */}
            <div className="z-10 w-[200px] h-[200px] md:w-[300px] md:h-[300px] relative">
              <HeroSection />
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 1, x: 1200, y: -60 }}
        animate={{ opacity: 1, x: -1500, y: 1500 }}
        transition={{ duration: 500 }}
        className="hidden md:inline-flex items-center gap-4"
        style={{ transform: 'scale(1.5)' }}
      >
        <Image src="/shootingstars.svg" alt="Shooting Star" width={250} height={250} />
      </motion.div>
    </div>
  );
}

export default HeroSectionContent