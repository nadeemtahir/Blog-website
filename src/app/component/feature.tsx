import React from 'react';

function Feature() {
  return (
    <div className="flex items-center justify-center min-h-[50vh] bg-neutral-200 text-white">
      <section className="text-center px-4 py-12 md:px-6 md:py-16">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-red-500 md:text-4xl lg:text-5xl animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-white mt-5">
          Manahil Nadeem: Navigating the Secrets of Development
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm text-gray-700 sm:text-base md:mt-6 lg:mt-8 animate-fade-in-up delay-100">
          Join Manahil Nadeem on an inspiring journey through the intricate world of software development. From cutting-edge technologies to innovative problem-solving techniques, Manahil brings a wealth of expertise and a passion for transforming ideas into impactful solutions. Dive into a realm where creativity meets precision, and discover the true art of development.
        </p>

        {/* Categories Section */}
        <div className="mx-auto max-w-4xl px-5 mt-12">
          {/* Subheading */}
          <h1 className="text-3xl font-bold text-center my-8 text-red-500 animate-color-change">
            Exploring our Categories
          </h1>

          {/* Categories Flexbox */}
          <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up delay-100">
            {[
              "Technology",
              "Software Development",
              "Web Development",
              "Next.js",
              "HTML",
            ].map((category, index) => (
              <div
                key={index}
                className="relative group p-6 bg-gray-800 rounded-lg shadow-xl hover:bg-sky-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-400"
              >
                <p className="text-center text-lg font-semibold">{category}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Paragraph */}
        <p className="text-sm md:text-base text-gray-700 mb-6 px-4 animate-fade-in-down delay-100 mt-10">
          Through constant exploration and innovation, we strive to provide you with a comprehensive understanding of the latest advancements in the tech industry. Whether youre a seasoned professional or just beginning your journey, our platform offers insights and tools to help you grow and succeed in the ever-evolving world of technology.
        </p>
      </section>
    </div>
  );
}

export default Feature;
