"use client";

import React, { useState } from "react";
import { IconType } from "react-icons";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  href: string;
  active?: boolean;
  color?: string;
  onClick?: () => void;
}

const SideBarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  color = "text-sidebarIcon1", // Default color if none provided
  label,
  href,
  active = false,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className={`flex items-center p-2 rounded-xl transition-colors duration-300 mx-2 ${
        active
          ? "bg-sidebarActive text-textMain"
          : "text-textMain hover:bg-sidebarHover"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <Icon
        className={`h-5 w-5 ml-1 ${
          active ? `text-${color}` : isHovered ? `text-${color}` : `text-${color}`
        }`}
      />
      <span className="ml-4">{label}</span>
    </a>
  );
};

export default SideBarItem;
