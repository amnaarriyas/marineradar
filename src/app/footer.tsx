'use client';

import { FaFacebookF, FaTwitter, FaYoutube, FaApple, FaGooglePlay } from 'react-icons/fa';

export default function AppAndFooterSection() {
  return (
    <footer className="bg-black text-white pt-[100px]">
      {/* Get the App Banner */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-r from-[#3ca6ff] to-[#007aff] text-white rounded-[30px] p-10 flex flex-col sm:flex-row justify-between items-center relative overflow-hidden">
          <div className="z-10 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Get the app <br />
              <span className="font-light">now</span>
            </h2>
            <div className="flex gap-4 mt-6 justify-center sm:justify-start">
              <button className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition">
                <FaGooglePlay size={20} />
              </button>
              <button className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition">
                <FaApple size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#0d0d0d] w-full mt-24 py-8 px-6 sm:px-16">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          {/* Logo & Socials */}
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2 text-white font-semibold">
              <img src="/logo.svg" alt="Company Logo" className="h-8 w-auto" />
            </div>
            <div className="flex gap-4 mt-2 text-gray-400">
              {[FaFacebookF, FaTwitter, FaYoutube].map((Icon, idx) => (
                <Icon key={idx} className="hover:text-white transition" />
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <ul className="flex flex-wrap justify-center sm:justify-end gap-6 mt-6 sm:mt-0 text-sm text-gray-300">
            {['Home', 'Experience', 'News', 'About us', 'Jobs', 'Contact'].map((item, i) => (
              <li key={i} className="hover:text-white cursor-pointer transition">{item}</li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-center text-gray-600 mt-6">
          © {new Date().getFullYear()} - ABC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
