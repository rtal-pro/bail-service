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
    borderColor: isHovered ? `transparent` : border,
    color: isHovered ? `var(--text-main-light)` : color, // Adjusted to match your theme classes
    backgroundColor: isHovered ? color : `transparent`,
  };

  return (
    <button
      className={`border-2 px-4 py-2 rounded-lg transition-all duration-200 ease-in-out`}
      style={hoverStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {title}
    </button>
  );
};

export default BorderButton;
