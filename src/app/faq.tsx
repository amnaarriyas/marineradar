'use client';

import { FaQuestionCircle } from 'react-icons/fa';

const faqs = [
  "How cool is this app",
  "Its design is incredibly user-friendly",
  "The features are intuitive and easy to navigate",
  "It offers seamless integration with other tools",
  "The performance is consistently reliable and fast",
  "User feedback has been overwhelmingly positive",
];

export default function FAQSection() {
  return (
    <section className="bg-black text-white pt-20 pb-16 px-6 sm:px-12 md:px-20" id="faq">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-2xl sm:text-4xl font-medium md:pl-[90px]">Frequently Asked Questions</h2>
        </div>

        <p className="text-gray-400 text-sm sm:text-lg font-normal max-w-2xl mb-8 md:pl-[90px]">
          Hear from our marine enthusiasts about how Marine Radar has enhanced their experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 text-sm md:pl-[90px]">
          {faqs.map((faq, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="text-lg font-medium">+</span>
              <p>{faq}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-sm text-gray-400 md:pl-[90px]">
          Couldn't find your answer?{' '}
          <a href="#" className="text-blue-500 hover:underline hover:text-blue-400">
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}
