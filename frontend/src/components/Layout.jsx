// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar'; // Your reusable navbar
import Footer from './Footer'; // Your reusable footer
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
