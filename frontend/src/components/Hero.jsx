import React from 'react';

export default function Hero() {
  return (
    <section className="bg-midnight py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-6">
            Redefine Your Space with Timeless Elegance
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            At HavenHue, we bring curated decor and furnishing pieces that blend comfort, luxury, and function into your everyday living.
          </p>
          <button className="bg-brand-gold text-brand-dark px-6 py-3 rounded-md hover:bg-yellow-400 transition">
            Explore Collections
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/assets/products/shopping-cart-image.jpg"
            alt="Shopping"
            className="w-full max-w-md rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
