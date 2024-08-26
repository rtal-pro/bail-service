"use client";

import React from "react";

interface LayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({ sidebar, children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className=" h-full shadow-lg">{sidebar}</div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-white overflow-y-auto">{children}</div>
    </div>
  );
};

export default DashboardLayout;
