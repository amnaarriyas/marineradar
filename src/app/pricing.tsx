'use client';

import { FaShip } from 'react-icons/fa';

const plans = [
  {
    name: 'Free',
    price: '$0 / Month',
    features: [
      'Upto 2 vessel tracking',
      'Port data',
      'Lighthouse data',
      'Area statistics',
    ],
    button: 'Get started',
    highlight: false,
  },
  {
    name: 'Weekly',
    price: '$399 / Month',
    features: [
      'Upto 2 vessel tracking',
      'Port data',
      'Lighthouse data',
      'Area statistics',
      'Route planner',
    ],
    button: 'Get started',
    highlight: true,
  },
  {
    name: 'Monthly',
    price: '$3999 / Month',
    features: [
      'Upto 2 vessel tracking',
      'Port data',
      'Lighthouse data',
      'Area statistics',
      'Route planner',
    ],
    button: 'Get started',
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-black text-white px-6 sm:px-12 md:px-20 pt-20 pb-[100px]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 md:pl-[90px] mb-2">
          <h2 className="text-2xl sm:text-4xl font-medium">Smart plans for every voyage</h2>
        </div>
        <p className="text-gray-400 text-sm sm:text-lg font-normal mt-2 md:pl-[90px] max-w-2xl">
          Hear from our marine enthusiasts about how Marine Radar has enhanced their navigation and delivered real-time insights at sea.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:pl-[90px] pt-16">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl px-6 py-8 shadow-xl border border-white/10 ${
                plan.highlight
                  ? 'bg-gradient-to-b from-blue-900/60 to-blue-800/40 backdrop-blur-xl ring-1 ring-blue-400/30 scale-105'
                  : 'bg-white/5 backdrop-blur-md'
              } hover:scale-[1.03] transition-transform duration-300`}
            >
              <h3 className="text-lg font-semibold mb-6">{plan.name}</h3>
              <ul className="text-sm text-gray-200 space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xl font-medium text-white mb-6">{plan.price}</p>
              <button className="w-full py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
