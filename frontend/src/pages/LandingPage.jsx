import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { motion } from 'framer-motion';

export default function LandingPage() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);


  return (
    <section className="min-h-screen fixed bg-gray-100 py-12 md:py-20 flex justify-center items-center pl-0 md:pl-64 transition-all duration-300">

        {/* Sidebar (Desktop only) */}
    
      <motion.div
        className="absolute bg-red-500 rounded-full w-40 h-40"
        initial={{ x: '-50vw', y: '50vh' }}
        animate={{ x: '100vw', y: '-50vh' }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
      />
      <motion.div
        className="absolute bg-yellow-500 rounded-full w-60 h-60"
        initial={{ x: '50vw', y: '-50vh' }}
        animate={{ x: '-50vw', y: '50vh' }}
        transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
      />
      <motion.div
        className="absolute bg-green-500 rounded-full w-32 h-32"
        initial={{ x: '-40vw', y: '-30vh' }}
        animate={{ x: '40vw', y: '30vh' }}
        transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
      />
      <motion.div
        className="absolute bg-gray-500 w-2 h-32"
        initial={{ x: '100vw', rotate: -45 }}
        animate={{ x: '-100vw', rotate: -45 }}
        transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
        />
        <div className="absolute bg-blue-300 rounded-full w-32 h-32 opacity-30 top-20 left-10"></div>
        <div className="absolute bg-purple-500 rounded-full w-48 h-48 opacity-25 top-40 right-20"></div>
        <div className="absolute bg-green-400 rounded-full w-24 h-24 opacity-50 bottom-10 left-40"></div>

        {/* Static Lines */}
        <div className="absolute bg-gray-400 w-full h-1 opacity-20 top-1/4"></div>
        <div className="absolute bg-gray-400 w-full h-1 opacity-20 top-1/2"></div>
        <div className="absolute bg-gray-400 w-full h-1 opacity-20 top-3/4"></div>

        {/* Rectangular Blocks */}
        <div className="absolute bg-teal-400 w-32 h-12 opacity-30 top-1/3 left-1/4"></div>
        <div className="absolute bg-orange-400 w-48 h-16 opacity-40 top-2/3 right-1/3"></div>
        <div className="absolute bg-yellow-500 w-56 h-24 opacity-50 bottom-1/4 left-1/2"></div>

        {/* Diagonal Lines */}
        <div className="absolute bg-gray-700 w-1 h-40 transform rotate-45 top-20 left-20"></div>
        <div className="absolute bg-gray-700 w-1 h-40 transform rotate-45 top-40 right-10"></div>
        <div className="absolute bg-gray-700 w-1 h-40 transform rotate-45 top-60 left-10"></div>

        {/* Grid of Small Dots */}
        <div className="absolute top-1/4 left-1/4 grid grid-cols-4 gap-2">
            <div className="w-4 h-4 bg-pink-300 rounded-full opacity-40"></div>
            <div className="w-4 h-4 bg-pink-300 rounded-full opacity-40"></div>
            <div className="w-4 h-4 bg-pink-300 rounded-full opacity-40"></div>
            <div className="w-4 h-4 bg-pink-300 rounded-full opacity-40"></div>
            <div className="w-4 h-4 bg-pink-300 rounded-full opacity-40"></div>
            <div className="w-4 h-4 bg-pink-300 rounded-full opacity-40"></div>
            <div className="w-4 h-4 bg-pink-300 rounded-full opacity-40"></div>
            <div className="w-4 h-4 bg-pink-300 rounded-full opacity-40"></div>
            <div className="w-4 h-4 bg-pink-300 rounded-full opacity-40"></div>
        </div>
      {/* Navbar */}
      <div className="fixed z-9 top-0 left-0 right-0 bg-transparent ">
        <div className="flex justify-between items-center px-6 py-4">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <img src="/assets/logo/logo.png" alt="HavenHue Logo" className="h-10 w-auto" />
            <span className="text-2xl font-serif font-bold text-brand-dark">HavenHue</span>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8 text-lg font-medium text-gray-700">
            <Link to="/" className="hover:text-brand-gold transition">Home</Link>
            <Link to="/about" className="hover:text-brand-gold transition">About Us</Link>

            {/* Dropdown for Categories */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="hover:text-brand-gold transition">Categories</button>
              {isDropdownOpen && (
                <div className="absolute top-10 left-0 bg-white border rounded-md shadow-lg z-20 w-44 text-sm">
                  <Link to="/shop?category=sofas" className="block px-4 py-2 hover:bg-gray-100">Sofas & Seating</Link>
                  <Link to="/shop?category=tables" className="block px-4 py-2 hover:bg-gray-100">Tables</Link>
                  <Link to="/shop?category=beds" className="block px-4 py-2 hover:bg-gray-100">Beds</Link>
                  <Link to="/shop?category=lighting" className="block px-4 py-2 hover:bg-gray-100">Lighting</Link>
                  <Link to="/shop?category=storage" className="block px-4 py-2 hover:bg-gray-100">Storage</Link>
                  <Link to="/shop?category=decor" className="block px-4 py-2 hover:bg-gray-100">Wall Decor</Link>
                  <Link to="/shop?category=rugs" className="block px-4 py-2 hover:bg-gray-100">Rugs & Mats</Link>
                  <Link to="/shop?category=outdoor" className="block px-4 py-2 hover:bg-gray-100">Outdoor</Link>
                </div>
              )}
            </div>

            <Link to="/services" className="hover:text-brand-gold transition">Services</Link>
            <Link to="/cart" className="hover:text-brand-gold transition">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>

            {/* Sign Up Button */}
            <Link to="/signup" className="bg-brand-gold text-brand-dark px-4 py-2 rounded-md hover:bg-yellow-400 transition">
              Sign Up
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 hover:text-brand-gold"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              <span className="block w-6 h-1 bg-gray-700 mb-1"></span>
              <span className="block w-6 h-1 bg-gray-700 mb-1"></span>
              <span className="block w-6 h-1 bg-gray-700"></span>
            </button>
          </div>
        </div>
        <button
            className="ml-4 md:hidden text-gray-700 hover:text-brand-gold"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
            {isSidebarOpen ? '❌ Close Menu' : '📂 Open Menu'}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center bg-white py-4 shadow-md">
            <Link to="/" className="py-2 text-lg text-gray-700 hover:text-brand-gold">Home</Link>
            <Link to="/about" className="py-2 text-lg text-gray-700 hover:text-brand-gold">About Us</Link>
            <Link to="/services" className="py-2 text-lg text-gray-700 hover:text-brand-gold">Services</Link>
            <Link to="/cart" className="py-2 text-lg text-gray-700 hover:text-brand-gold">Cart</Link>
            <Link to="/signup" className="py-2 text-lg text-gray-700 hover:text-brand-gold">Sign Up</Link>
          </div>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-brand-dark mb-6">
            Redefine Your Space with Timeless Elegance
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            At HavenHue, we bring curated decor and furnishing pieces that blend comfort, luxury, and function into your everyday living.
          </p>
          <Link to="/shop">
            <button className="bg-brand-gold text-brand-dark px-6 py-3 rounded-md hover:bg-yellow-400 transition">
              Explore Collections
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center h-[100vh] border-l-2 border-gray-300">
          <img
            src="/assets/products/photopea-smiley-man-with-shopping-bags.png"
            alt="Shopping"
            className="h-[90rem] w-auto  object-contain  "
          />
        </div>
      </div>

    </section>
  );
}
