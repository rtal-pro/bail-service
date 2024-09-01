// components/UpcountStat.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Example icon, you can replace it with any icon you prefer

interface UpcountStatProps {
  label: string;
  value: number;
  icon?: React.ElementType; // Allow passing any icon component
}

const UpcountStat: React.FC<UpcountStatProps> = ({ label, value, icon: Icon = FaArrowUp }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    let incrementTime = Math.abs(Math.floor(1000 / (end - start)));
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer); // Cleanup on unmount
  }, [value]);

  return (
    <div className="p-4 border rounded-xl shadow flex justify-between items-center bg-bgPrimary text-textMain">
      <div>
        <div className="text-lg font-semibold text-textAccent">{label}</div>
        <div className="text-2xl font-bold text-btnPrimary">{count}</div>
      </div>
      <div className="text-3xl bg-btnPrimary p-2 rounded-xl text-white">
        <Icon />
      </div>
    </div>
  );
};

export default UpcountStat;
