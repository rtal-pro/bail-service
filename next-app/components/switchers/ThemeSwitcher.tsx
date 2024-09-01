// components/ThemeSwitcher.tsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { FaSun, FaMoon, FaPalette } from 'react-icons/fa';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const validThemes = ['light', 'dark', 'scifi'];
    if (validThemes.includes(theme)) {
      document.documentElement.classList.remove('light', 'dark', 'scifi');
      document.documentElement.classList.add(theme);
    } else {
      console.error(`Invalid theme: ${theme}`);
    }
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleToggle}
        className="p-2 rounded-full bg-bgPrimary shadow-lg focus:outline-none transition transform hover:scale-105"
        aria-label="Toggle theme"
      >
        {theme === 'light' && <FaSun className="text-yellow-500" />}
        {theme === 'dark' && <FaMoon className="text-blue-200" />}
        {theme === 'scifi' && <FaPalette className="text-purple-600" />}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-bgPrimary ring-1 ring-black ring-opacity-5 z-20">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              onClick={() => { toggleTheme('light'); setIsOpen(false); }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-btnPrimaryHover ${
                theme === 'light' ? 'bg-btnPrimaryHover' : ''
              }`}
            >
              <FaSun className="inline-block mr-2 text-yellow-500" />
              Light Theme
            </button>
            <button
              onClick={() => { toggleTheme('dark'); setIsOpen(false); }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-btnPrimaryHover ${
                theme === 'dark' ? 'bg-btnPrimaryHover' : ''
              }`}
            >
              <FaMoon className="inline-block mr-2 text-blue-200" />
              Dark Theme
            </button>
            <button
              onClick={() => { toggleTheme('scifi'); setIsOpen(false); }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-btnPrimaryHover ${
                theme === 'scifi' ? 'bg-btnPrimaryHover' : ''
              }`}
            >
              <FaPalette className="inline-block mr-2 text-purple-600" />
              Sci-Fi Theme
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
