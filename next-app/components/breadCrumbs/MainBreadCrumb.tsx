"use client"; // Ensure this is a Client Component

import React from "react";

interface BreadcrumbProps {
  breadcrumb: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumb }) => {
  return (
    <div className="text-sm text-textAccentLight">
      {breadcrumb}
    </div>
  );
};

export default Breadcrumb;