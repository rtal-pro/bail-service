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
      className={`fixed top-4 left-60 w-[calc(100%-16rem)] px-4 h-16 flex items-center justify-between rounded-xl shadow-xl z-10 ${
        isSticky ? 'bg-transparent blur-lg' : 'bg-slate-500'
      }`}
      style={{
        transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        boxShadow: isSticky ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div className='flex items-center space-x-4'>
        <div className='text-lg font-bold text-slate-800'>{pageTitle}</div>
        <div className='text-sm text-slate-400'>{breadCrumb}</div>
      </div>
      <div className="flex space-x-4">
        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'>
          Button 1
        </button>
        <button className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600'>
          Button 2
        </button>
      </div>
    </div>
  );
};

export default Navbar;
