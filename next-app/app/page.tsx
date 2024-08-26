import React from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { AceternitySideBar } from "../components/sidebars/AceternitySideBar";

const DashboardPage = () => {
  return (
    <DashboardLayout sidebar={<AceternitySideBar />}>
      {/* Main content goes here */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard Content</h1>
        {/* Add your page content here */}
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;