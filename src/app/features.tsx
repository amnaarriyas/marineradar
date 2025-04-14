'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaShip } from 'react-icons/fa';

const features = [
  {
    title: 'Detailed vessel info',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/feature-vessel.png',
  },
  {
    title: 'Ports at a glance',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/feature-port.png',
  },
  {
    title: 'Light house insights',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    image: '/feature-lighthouse.png',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const FeatureSection: React.FC = () => {
  return (
    <section className="px-6 sm:px-12 md:px-20 pt-24 pb-16 bg-black" id="features">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center gap-3 md:pl-[90px] mb-2">
          <h2 className="text-2xl sm:text-4xl font-medium">Every Vessel, Every Move</h2>
        </div>

        <p className="text-gray-400 text-sm sm:text-lg font-normal mt-2 md:pl-[90px] max-w-2xl">
          Tap into live ship data — names, types, routes, destinations,
          <br className="hidden sm:block" /> and full history at your fingertips.
        </p>
      </motion.div>

      <div className="mt-16 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-8 md:pl-[90px]">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="w-[306.67px] h-[374px] flex flex-col items-center bg-[rgba(177,177,177,0.08)] rounded-[32px] overflow-hidden"
          >
            {/* For middle card: text first */}
            {index === 1 ? (
              <>
                <div className="p-5 flex flex-col justify-between gap-2 text-white text-left h-[50%]">
                  <h3 className="text-lg font-semibold font-sfpro">{feature.title}</h3>
                  <p className="text-sm font-normal leading-snug opacity-80 font-sfpro">
                    {feature.description}
                  </p>
                </div>
                <div className="relative w-full h-[140px] overflow-hidden mt-auto">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-b-[32px]"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="relative w-full h-[140px] overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-[32px]"
                  />
                </div>
                <div className="p-5 flex flex-col justify-between gap-2 text-white text-left h-[50%]">
                  <h3 className="text-lg font-semibold font-sfpro">{feature.title}</h3>
                  <p className="text-sm font-normal leading-snug opacity-80 font-sfpro">
                    {feature.description}
                  </p>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
