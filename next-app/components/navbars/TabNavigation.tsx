"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext'; // Ensure you import the theme context

interface TabNavigationProps {
  tabs: { name: string; component: React.ReactNode }[];
}

const TabNavigation: React.FC<TabNavigationProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const { theme } = useTheme(); // Use the theme from your context

  return (
    <div className="flex flex-col">
      <div className="flex space-x-4 mb-4 justify-center">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 items-center rounded transition duration-200 ease-in-out transform hover:scale-105 ${
              activeTab === index 
                ? 'bg-btnPrimary text-white' 
                : 'bg-bgSecondary text-textMain'
            }`}
            onClick={() => setActiveTab(index)}
            aria-selected={activeTab === index}
            role="tab"
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* AnimatePresence for tab transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}  // Animation starts with these values
          animate={{ opacity: 1, x: 0 }}  // Animate to these values
          exit={{ opacity: 0, x: -20 }}   // Animate out with these values
          transition={{ duration: 0.3 }}  // Duration of the animation
          className="p-4 bg-bgPrimary rounded-lg shadow"
          role="tabpanel"
        >
          {tabs[activeTab].component}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TabNavigation;
