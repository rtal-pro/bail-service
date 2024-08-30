"use client";
import React, { useState } from "react";
import { IconType } from "react-icons";

interface SidebarItemProps {
  icon: IconType;  // Use IconType for better typing from react-icons
  label: string;
  href: string;
  active?: boolean;
  color?: string;
}

const SideBarItem: React.FC<SidebarItemProps> = ({ icon: Icon, color = "text-gray-600", label, href, active = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href} 
      className={`flex items-center p-2 rounded-xl transition-colors duration-300 mx-2 ${
        active ? 'bg-indigo-100 text-indigo-500' : 'text-gray-700 hover:bg-indigo-50'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon 
        className={`h-5 w-5 ml-1 ${active ? color : isHovered ? color : color}`}
      />
      <span className="ml-4">{label}</span>
    </a>
  );
};

export default SideBarItem;
