'use client'

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
    <section className="bg-black text-white pt 20">
      <div className="">
      <h2 className="text-2xl sm:text-4xl font-medium mb-4 md:pl-[185px]">Frequently asked questions</h2>
      <p className="text-gray-400 text-sm sm:text-lg font-normal max-w-2xl mt-4 md:pl-[185px]">
          Hear from our marine enthusiasts about how Marine
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 text-sm pt-12 md:pl-[185px]">
          {faqs.map((faq, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="text-lg font-medium">+</span>
              <p>{faq}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-sm text-gray-400 md:pl-[185px]">
          Couldn't find your answer?{" "}
          <a
            href="#"
            className="text-blue-500 hover:underline hover:text-blue-400"
          >
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}
