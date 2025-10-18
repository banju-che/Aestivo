// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#2E2E2E] text-[#F9FAFB] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-[#FFA726] mb-4">HavenHue</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Transform your living space with timeless decor, elegant furnishings,
            and curated style to match your mood.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-[#FFA726]">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#4CAF50] transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#4CAF50] transition">About Us</Link></li>
            <li><Link to="/shop" className="hover:text-[#4CAF50] transition">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-[#4CAF50] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-[#FFA726]">Help</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:text-[#4CAF50] transition">FAQs</Link></li>
            <li><Link to="/policies" className="hover:text-[#4CAF50] transition">Policies</Link></li>
            <li><Link to="/services" className="hover:text-[#4CAF50] transition">Services</Link></li>
            <li><Link to="/checkout" className="hover:text-[#4CAF50] transition">Checkout</Link></li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-[#FFA726]">Connect</h4>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-[#4CAF50] transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#4CAF50] transition"><FaInstagram /></a>
            <a href="#" className="hover:text-[#4CAF50] transition"><FaTwitter /></a>
            <a href="#" className="hover:text-[#4CAF50] transition"><FaPinterestP /></a>
          </div>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-md bg-[#F9FAFB] text-gray-800 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#FFA726] text-[#2E2E2E] py-2 rounded-md hover:bg-[#FFB84D] transition text-sm font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} <span className="text-[#FFA726] font-semibold">HavenHue</span>. All rights reserved.
      </div>
    </footer>
  );
}
