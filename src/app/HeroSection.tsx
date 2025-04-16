'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'

// === 3D EARTH SPHERE COMPONENT === //
const EarthCanvas = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if the screen width is for desktop
    const updateIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    // Initialize and add resize listener
    updateIsDesktop();
    window.addEventListener('resize', updateIsDesktop);

    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    mountRef.current?.appendChild(renderer.domElement);

    const texture = new THREE.TextureLoader().load('/2k_earth_nightmap.jpg');
    const geometry = new THREE.SphereGeometry(2.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    camera.position.z = 8;

    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.002;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateIsDesktop);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0 w-full h-full pointer-events-none"
      style={{
        transform: isDesktop ? 'translateX(200px)' : 'none', // Move the Earth 200px to the right only for desktop screens
      }}
    />
  )
}

// === HERO CONTENT === //
const HeroSectionContent: React.FC = () => {
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set the window dimensions on the client side
    const updateWindowDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Initialize dimensions and add resize listener
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Earth */}
      <EarthCanvas />

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-6 py-6 sm:px-10 md:px-16 lg:px-24">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/logo.svg" alt="Logo" width={150} height={36} />
        </div>
        <div className="flex items-center gap-3 z-30">
          <button className="bg-white text-black p-2 rounded-full hover:scale-105 transition">
            <FaGooglePlay size={18} />
          </button>
          <button className="bg-white text-black p-2 rounded-full hover:scale-105 transition">
            <FaApple size={18} />
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between px-6 pt-32 pb-20 sm:px-10 md:px-16 lg:px-24">
        {/* Text Section */}
        <div className="max-w-xl text-center lg:text-left mt-10 lg:mt-12 lg:pl-[90px] z-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.2] tracking-wide font-sf"
          >
            Track any<br />Vessel, Anywhere!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-6 text-[#AAAAAA] text-base sm:text-lg leading-relaxed font-sf"
          >
            Stay ahead of the waves!
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 px-8 py-4 text-base tracking-wider font-semibold bg-[#0A84FF] rounded-full shadow-lg text-white transition hover:bg-blue-700 font-sf"
          >
            Try for free
          </motion.button>
        </div>

        {/* Empty spacer for alignment on large screens */}
        <div className="w-full max-w-[300px] h-[300px] sm:max-w-[350px] sm:h-[350px] md:max-w-[400px] md:h-[400px] relative z-10" />
      </div>

      {/* Shooting Star */}
      <motion.div
        initial={{ opacity: 1, x: 0, y: 0 }}
        animate={{
          opacity: 1,
          x: -windowDimensions.width * 2,
          y: windowDimensions.height * 2,
        }}
        transition={{ duration: 600, repeat: Infinity, repeatType: "loop" }}

        className="absolute top-0 right-0 pointer-events-none"
        style={{ transform: 'scale(3)' }}
      >
        <Image src="/shootingstars.svg" alt="Shooting Star" width={250} height={250} />
      </motion.div>
    </div>
  );
};

export default HeroSectionContent;
