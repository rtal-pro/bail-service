"use client"; // Ensure this is a Client Component

import React, { useState, useEffect } from 'react';
import ThemeSwitcher from '../switchers/ThemeSwitcher';
import { useTheme } from '@/contexts/ThemeContext'; // Import the theme context

interface NavbarProps {
  breadCrumb: string;
  pageTitle: string;
}

const Navbar: React.FC<NavbarProps> = ({ breadCrumb, pageTitle }) => {
  const [isSticky, setSticky] = useState(false);
  const [isScrolledQuarter, setIsScrolledQuarter] = useState(false);
  const { theme } = useTheme(); // Access the current theme from context

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    setSticky(scrollY > 0);
    setIsScrolledQuarter(scrollY > viewportHeight / 4); // Adjusting quarter scroll condition
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
      className={`fixed top-4 left-72 w-[calc(100%-20rem)] px-4 h-16 flex items-center justify-between rounded-xl shadow-xl z-10`}
      style={{
        transition: 'background-color 0.5s ease-in-out, box-shadow 0.5s ease-in-out, backdrop-filter 0.5s ease-in-out',
        backgroundColor: isSticky ? 'var(--bg-primary-light)' : 'transparent',
        backdropFilter: isSticky ? 'blur(10px)' : 'none',
        boxShadow: isSticky ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div className={`relative z-10 flex flex-col ${isScrolledQuarter ? 'text-textMain' : 'text-textMainLight'}`}>
        <div className="text-sm flex items-center">
          {breadcrumbParts.map((part, index) => (
            <span
              key={index}
              className={`${
                isScrolledQuarter ? 'text-textMain' : 'text-textMainLight'
              } mr-1`}
            >
              {part}/
            </span>
          ))}
          <span
            className={`${
              isScrolledQuarter ? 'text-textAccent' : 'text-textAccentLight'
            }`}
          >
            {lastCrumb}
          </span>
        </div>
        <div className="text-lg font-bold">
          {pageTitle}
        </div>
      </div>

      {/* Theme Switcher Button */}
      <div className="relative z-10 flex items-center space-x-4">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
