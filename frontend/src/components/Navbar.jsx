import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { CartContext } from '../contexts/CartContext';
import { AuthContext } from '../contexts/AuthContext'; // Import AuthContext
import { toast } from 'react-toastify'; // Import toast for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext); // Access cart items from context
  const { user, logoutUser } = useContext(AuthContext); // Access user state and logout function from context
  const cartCount = cartItems.length;

  const navigate = useNavigate(); // Use useNavigate hook for navigation

  // Handle cart item actions with toast
  const handleCartAction = () => {
    toast.info('Item added to cart!');
  };

  // Handle sign out
  const handleLogout = () => {
    logoutUser(); // Clear auth tokens and user info
    toast.success('You have logged out successfully!');
    navigate('/signin'); // Redirect to signin page after logout
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          {/*<img src="/assets/logo/logo.png" alt="HavenHue Logo" className="h-10 w-auto" />*/}
          <span className="text-xl font-bold text-brand-dark font-serif">Aestivo</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-brand-gold transition">Home</Link>
          <Link to="/about" className="hover:text-brand-gold transition">About</Link>
          <Link to="/shop" className="hover:text-brand-gold transition">Shop</Link>
          <Link to="/services" className="hover:text-brand-gold transition">Services</Link>
          <Link to="/contact" className="hover:text-brand-gold transition">Contact</Link>

          {/* Cart Link */}
          <Link to="/cart" className="relative hover:text-brand-gold transition" onClick={handleCartAction}>
            <ShoppingCartIcon className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Conditionally render SignUp/SignIn/Logout buttons */}
          {!user ? (
            <>
              <Link to="/signup" className="bg-brand-gold text-brand-dark px-4 py-2 rounded hover:bg-yellow-400 transition">Sign Up</Link>
              <Link to="/signin" className="bg-brand-gold text-brand-dark px-4 py-2 rounded hover:bg-yellow-400 transition">Sign In</Link>
            </>
          ) : (
            <button 
              onClick={handleLogout} 
              className="bg-brand-gold text-brand-dark px-4 py-2 rounded hover:bg-yellow-400 transition"
            >
              Log Out
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pt-4 pb-6 space-y-4 text-gray-700 font-medium text-sm">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block">About</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)} className="block">Shop</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="block">Services</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block">Contact</Link>
          
          {/* Cart Link */}
          <Link to="/cart" onClick={() => (setMenuOpen(false), handleCartAction)} className="block relative" >
            Cart
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          
          {/* Conditionally render SignUp/SignIn/Logout buttons */}
          {!user ? (
            <>
              <Link to="/signup" onClick={() => setMenuOpen(false)} className="block bg-brand-gold text-brand-dark px-4 py-2 rounded hover:bg-yellow-400 transition">Sign Up</Link>
              <Link to="/signin" onClick={() => setMenuOpen(false)} className="block bg-brand-gold text-brand-dark px-4 py-2 rounded hover:bg-yellow-400 transition">Sign In</Link>
            </>
          ) : (
            <button 
              onClick={() => { handleLogout(); setMenuOpen(false); }} 
              className="block bg-brand-gold text-brand-dark px-4 py-2 rounded hover:bg-yellow-400 transition"
            >
              Log Out
            </button>
          )}
        </div>
      )}
    </header>
  );
}
