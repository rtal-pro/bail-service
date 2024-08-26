"use client";

import React from "react";

interface LayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({ sidebar, children }) => {
  return (
    <div className="flex h-full ">
      {/* Sidebar */}
      <div className="">{sidebar}</div>

      {/* Main Content */}
      <div className="">{children}</div>
    </div>
  );
};

export default DashboardLayout;
