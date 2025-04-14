'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const FeatureSection: React.FC = () => {
  return (
    <section className="px-8 sm:px-20 pt-24 pb-16 bg-black">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-left"
      >
        <h2 className="tw-full md:w-[60%] md:pl-[110px] flex flex-col items-center md:items-start text-center md:text-left text-2xl sm:text-4xl font-medium mb-4">
          Every Vessel, Every Move
        </h2>
        <p className="text-gray-400 text-sm sm:text-lg font-normal max-w-2xl md:w-[90%] md:pl-[110px] mt-4">
          Tap into live ship data — names, types, routes, destinations,<br /> and full,
          history at your fingertips.
        </p>
      </motion.div>

      <div className="mt-16 flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-8 md:pl-[110px]">
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
  )
}

export default FeatureSection
