"use client"; // Ensure this is a Client Component

import React, { useState, useEffect } from 'react';
import BorderButton from '../buttons/borderButton';

interface NavbarProps {
  breadCrumb: string;
  pageTitle: string;
}

const Navbar: React.FC<NavbarProps> = ({ breadCrumb, pageTitle }) => {
  const [isSticky, setSticky] = useState(false);
  const [isScrolledQuarter, setIsScrolledQuarter] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    setSticky(scrollY > 0);
    setIsScrolledQuarter(scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const breadcrumbParts = breadCrumb.split('/');
  const lastCrumb = breadcrumbParts.pop(); // Separate the last part of the breadcrumb

  return (
    <div
      className={`fixed top-4 left-70 w-[calc(100%-16rem)] px-4 h-16 flex items-center justify-between rounded-xl shadow-xl z-10 `}
      style={{
        transition: 'background-color 0.5s ease-in-out, box-shadow 0.5s ease-in-out, backdrop-filter 0.5s ease-in-out',
        backgroundColor: isSticky ? 'rgba(255, 255, 255, 0.4)' : 'transparent',
        backdropFilter: isSticky ? 'blur(10px)' : 'none',
        boxShadow: isSticky ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div className={`relative z-10 flex flex-col ${isScrolledQuarter ? 'text-slate-800' : 'text-white'}`}>
        <div className="text-sm">
          {breadcrumbParts.map((part, index) => (
            <span
              key={index}
              className={`${
                isScrolledQuarter ? 'text-slate-800' : 'text-white'
              }`}
            >
              {part}/
            </span>
          ))}
          <span
            className={`${
              isScrolledQuarter ? 'text-gray-400' : 'text-gray-300'
            }`}
          >
            {lastCrumb}
          </span>
        </div>
        <div className="text-lg font-bold">
          {pageTitle}
        </div>
      </div>

      {/* <div className="relative z-10 flex space-x-4 pr-4">
        <BorderButton title="Logout" border="#818cf8" color="#818cf8" />
      </div> */}
    </div>
  );
};

export default Navbar;