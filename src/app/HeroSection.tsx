'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import './globals.css';

const HeroSectionContent: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden" id="hero">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-6 py-6 sm:px-10">
        <Image src="/logo.svg" alt="Logo" width={130} height={36} />
        <div className="hidden sm:flex items-center gap-3">
          <button className="bg-white text-black p-2 rounded-full hover:scale-105 transition">
            <FaGooglePlay size={18} />
          </button>
          <button className="bg-white text-black p-2 rounded-full hover:scale-105 transition">
            <FaApple size={18} />
          </button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 pt-40 md:pt-60 gap-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left md:pl-[90px]">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Track any <br />
            Vessel, Anywhere!
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-4 text-[#AAAAAA] text-base sm:text-lg"
          >
            Stay ahead of the waves!
          </motion.p>

          {/* Try for free button (Desktop) */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 px-8 py-4 text-base tracking-wider font-normal bg-[#0A84FF] rounded-full shadow-lg text-white transition hover:bg-blue-700 hidden sm:inline-block"
          >
            Try for free
          </motion.button>

          {/* Get the app button (Mobile) */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 px-8 py-4 text-base tracking-wider font-normal bg-[#0A84FF] rounded-full shadow-lg text-white transition hover:bg-blue-700 sm:hidden"
          >
            Get the app
          </motion.button>
        </div>

        {/* Placeholder for spacing only on desktop */}
        <div className="hidden md:block md:w-1/2"></div>
      </div>

      {/* Earth Image Positioned Bottom Right (moved further up only for Mobile, further adjustment) */}
      <div className="absolute right-0 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[650px] md:h-[650px] lg:w-[750px] lg:h-[750px] pointer-events-none z-0 -bottom-20 sm:-bottom-40 md:-bottom-44">
        <Image
          src="/earth-visual.png"
          alt="Earth Visual"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>

      {/* Mobile Store Buttons on Earth Image (Rectangle Shape, Increased Width, Less Spacing, Right Margin) */}
      <div className="absolute bottom-10 right-4 sm:hidden z-10 flex flex-col items-center w-[60px] rounded-[30px] gap-2">
        <button className="bg-white text-black px-6 py-3 w-[60px] rounded-[30px] shadow-md flex justify-center items-center">
          <FaGooglePlay size={24} />
        </button>
        <button className="bg-white text-black px-6 py-3 w-[60px] rounded-[30px] shadow-md mt-2 flex justify-center items-center">
          <FaApple size={24} />
        </button>
      </div>
    </div>
  );
};

export default HeroSectionContent;
