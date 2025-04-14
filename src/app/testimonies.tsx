'use client';

import Image from 'next/image';
import { FaCommentDots } from 'react-icons/fa';

const testimonials = [
  { name: 'Eleanor Pena', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', img: '/avatars/eleanor.jpg' },
  { name: 'Robert Fox', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', img: '/avatars/robert.jpg' },
  { name: 'Cody Fisher', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', img: '/avatars/cody.jpg' },
  { name: 'Darrell Steward', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', img: '/avatars/darrell.jpg' },
  { name: 'Dianne Russell', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', img: '/avatars/dianne.jpg' },
  { name: 'Guy Hawkins', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', img: '/avatars/guy.jpg' },
  { name: 'Kathryn Murphy', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', img: '/avatars/kathryn.jpg' },
  { name: 'Marvin McKinney', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', img: '/avatars/marvin.jpg' },
  { name: 'Ralph Edwards', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', img: '/avatars/ralph.jpg' },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-black text-white px-6 sm:px-12 md:px-20 pt-[180px] pb-[100px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 md:pl-[90px] mb-2">
          <h2 className="text-2xl sm:text-4xl font-medium">What our users are saying</h2>
        </div>
        <p className="text-gray-400 text-sm sm:text-lg font-normal mt-2 md:pl-[90px] max-w-2xl">
          Hear from our most enthusiastic users. With VesselTrack’s real-time enhanced
          threat recognition and detailed vessel insights, the praise speaks for itself.
        </p>

        {/* Testimonial Cards */}
        <div className="relative rounded-xl overflow-hidden shadow-lg pt-10 md:pl-[90px]">
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

          {/* Responsive Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-[500px] overflow-y-auto px-1 sm:px-2 scrollbar-hidden">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/5 backdrop-blur-md p-6 flex flex-col justify-between min-h-[180px] shadow-md"
              >
                <p className="text-sm text-gray-300 mb-6">{t.text}</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-white text-sm font-medium">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
