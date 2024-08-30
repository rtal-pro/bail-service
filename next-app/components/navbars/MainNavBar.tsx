"use client"; // Ensure this is a Client Component

import React, { useState, useEffect } from 'react';

interface NavbarProps {
  breadCrumb: string;
  pageTitle: string;
}

const Navbar: React.FC<NavbarProps> = ({ breadCrumb, pageTitle }) => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-4 left-60 w-[calc(100%-16rem)] px-4 h-16 flex items-center justify-between rounded-xl shadow-xl z-10 `}
      style={{
        transition: 'background-color 0.5s ease-in-out, box-shadow 0.5s ease-in-out',
        boxShadow: isSticky ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
        backdropFilter: isSticky ? 'blur(10px)' : 'none',
      }}
    >
      {/* The inner content will not be blurred */}
      <div className="relative z-10 flex flex-col">
        <div className="text-sm text-slate-600">{breadCrumb}</div>
        <div className="text-lg font-bold text-slate-800">{pageTitle}</div>
      </div>

      <div className="relative z-10 flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600">
          Button 1
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600">
          Button 2
        </button>
      </div>
    </div>
  );
};

export default Navbar;
