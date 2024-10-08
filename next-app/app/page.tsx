import React from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import SideBar from "@/components/sidebars/MainSideBar";
import Navbar from "@/components/navbars/MainNavBar";
import OneTierContent from "@/layouts/OneTierContent";

const metadata = {
  title: "Dashboard",
  Breadcrumb: "Admin/dashboard",
};


const DashboardPage = () => {
  return (
    <DashboardLayout 
      sidebar={<SideBar/>} 
      navbar={<Navbar breadCrumb={metadata.Breadcrumb} pageTitle={metadata.title}/>}
    >
      {/* Main content goes here */}
      <OneTierContent>
        <div>
          First Column
        </div>
        <div>
          Second Column
        </div>
      </OneTierContent>
    </DashboardLayout>
  );
};

export default DashboardPage;