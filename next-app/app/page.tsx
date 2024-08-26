import React from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { AceternitySideBar } from "../components/sidebars/AceternitySideBar";
import { BentoGridThirdDemo } from "@/components/bentoGrids/bentoDemo";
const DashboardPage = () => {
  return (
    <DashboardLayout sidebar={<AceternitySideBar />}> 
      {/* Main content goes here */}
      <BentoGridThirdDemo/>
    </DashboardLayout>
  );
};

export default DashboardPage;