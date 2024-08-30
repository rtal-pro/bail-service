"use client"; // Ensure this is a Client Component
import React, { useState } from "react";

interface BorderButtonProps {
  title: string;
  border: string;
  color: string;
}

const BorderButton: React.FC<BorderButtonProps> = ({ title, border, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyle = {
    borderColor: isHovered ? `transparent` : `${border}`,
    color: isHovered ? `` : `${color}`,
    background: isHovered ? `${color}` : `transparent`, // Slightly darker on hover
  };

  return (
    <button
      className={`border-b-2 border-spacing-1 px-4 py-2  transition-colors duration-200`}
      style={hoverStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {title}
    </button>
  );
};

export default BorderButton;