import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';

import ToastContainer from './components/ToastContainer'; // ✅ import custom toast container

import LandingPage from './pages/LandingPage';
import Layout from './components/Layout';

import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Faq from './pages/Faq';
import Policies from './pages/Policies';
import Shop from './pages/Shop';
import Product from './pages/Product';
import PayMpesa from './pages/PayMpesa';
import PayCard from './pages/PayCard';
import SignUp from './pages/SignUp';
import SignIn from './pages/Signin';
import PayPaypal from './pages/PayPaypal';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ToastContainer /> 
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />

            {/* Protected Routes */}
            <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
            <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
            <Route path="/pay/mpesa" element={<PrivateRoute><PayMpesa /></PrivateRoute>} />
            <Route path="/pay/card" element={<PrivateRoute><PayCard /></PrivateRoute>} />
            <Route path="/pay/paypal" element={<PrivateRoute><PayPaypal /></PrivateRoute>} />

            {/* Public */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/services" element={<Services />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Route>
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}
