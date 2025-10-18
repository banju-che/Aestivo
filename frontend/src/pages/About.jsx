const About = () => (
  <section className="p-6 max-w-6xl mx-auto mt-20">
    <h2 className="text-4xl font-bold text-center text-brand-dark mb-6">About HavenHue</h2>
    <div className="text-center mb-8">
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        At HavenHue, we believe that your home is a reflection of your personality, and the right pieces can elevate the energy of any space. Our mission is to help you find the perfect furniture and decor that brings warmth, style, and character to your home.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-semibold text-brand-dark mb-4">Our Story</h3>
        <p className="text-gray-600">
          Founded in 2023, HavenHue was born out of a love for high-quality, timeless design. We handpick every piece with the goal of transforming your living space into something that feels just right—whether it's a cozy living room or a stylish, welcoming entryway.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-brand-dark mb-4">Our Philosophy</h3>
        <p className="text-gray-600">
          We aim to offer furniture and decor that reflects a harmonious blend of style, functionality, and durability. Every product in our collection is chosen to fit seamlessly into diverse home aesthetics, from minimalist modern to classic elegance.
        </p>
      </div>
    </div>

    <div className="mt-12 bg-gray-100 p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-brand-dark text-center mb-4">Our Promise</h3>
      <p className="text-lg text-gray-700 mb-4 text-center">
        We stand by the quality of our products and our commitment to exceptional customer service. Whether you're redesigning your living room or sprucing up your bedroom, we’re here to make your home feel like the haven you deserve.
      </p>
      <div className="flex justify-center">
        <a href="/contact" className="bg-brand-gold text-white px-8 py-3 rounded-full text-lg hover:bg-yellow-400 transition">
          Contact Us
        </a>
      </div>
    </div>
  </section>
);

export default About;
