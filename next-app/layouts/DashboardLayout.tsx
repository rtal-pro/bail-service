"use client";

import React from "react";

interface LayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
  navbar?: React.ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({ sidebar, navbar, children }) => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="w-64 p-4 ">{sidebar}</div>
      <div className="flex flex-col min-h-screen w-full">
        <div className="w-full p-4 h-24">{navbar}</div>
        <div className="w-full p-4">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
