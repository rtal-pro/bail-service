"use client";

import React from 'react';
import { motion } from 'framer-motion'; 
import OneTierContent from '../../layouts/OneTierContent';
import DashboardLayout from '@/layouts/DashboardLayout';
import Navbar from '@/components/navbars/MainNavBar';
import ProviderCard from '@/components/cards/providerCard/providerCard';
import Sidebar from '@/components/sidebars/MainSideBar';
import TabNavigation from '@/components/navbars/TabNavigation';
import UpcountStat from '@/components/cards/upCountCard';
import Graph from '@/components/graphs/graph';
import WeekCalendar from '@/components/calendars/calendar';
import ProviderModificationForm from '@/components/forms/providers/ProvidersEditForm';
import { ProviderContextProvider, useProviderContext } from '@/contexts/ProvidersContext';
import { BsCheck } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";
import { SiStreamrunners } from "react-icons/si";



const ProvidersPage = () => {
  const providers = [
    {
      email: 'cleaner@example.com',
      phone: '+123456789',
      firstName: 'John',
      lastName: 'Smith',
      companyName: 'Cleaning Pros',
      role: 'USER',
      providerType: 'CLEANER',
    },
    {
      email: 'electrician@example.com',
      phone: '+987654321',
      firstName: 'Jane',
      lastName: 'Doe',
      companyName: 'Electric Fixers',
      role: 'USER',
      providerType: 'ELECTRICIAN',
    },
    {
      email: 'plumber@example.com',
      phone: '+1122334455',
      firstName: 'Jim',
      lastName: 'Beam',
      companyName: 'Pipe Masters',
      role: 'USER',
      providerType: 'PLUMBER',
    },
    {
      email: 'carpenter@example.com',
      phone: '+2233445566',
      firstName: 'Emma',
      lastName: 'Wood',
      companyName: 'Carpentry Crafts',
      role: 'USER',
      providerType: 'CARPENTER',
    },
    {
      email: 'painter@example.com',
      phone: '+3344556677',
      firstName: 'Paul',
      lastName: 'Brush',
      companyName: 'Painting Plus',
      role: 'USER',
      providerType: 'PAINTER',
    },
    {
      email: 'gardener@example.com',
      phone: '+4455667788',
      firstName: 'Lucy',
      lastName: 'Green',
      companyName: 'Garden Gurus',
      role: 'USER',
      providerType: 'GARDENER',
    },
    {
      email: 'hvac@example.com',
      phone: '+5566778899',
      firstName: 'Tom',
      lastName: 'Coldman',
      companyName: 'HVAC Heroes',
      role: 'USER',
      providerType: 'HVAC',
    },
    {
      email: 'it-support@example.com',
      phone: '+6677889900',
      firstName: 'Alice',
      lastName: 'Tech',
      companyName: 'IT Solutions',
      role: 'USER',
      providerType: 'IT_SUPPORT',
    },
    {
      email: 'landscaper@example.com',
      phone: '+7788990011',
      firstName: 'Mike',
      lastName: 'Grass',
      companyName: 'Lawn Legends',
      role: 'USER',
      providerType: 'LANDSCAPER',
    },
    {
      email: 'roofer@example.com',
      phone: '+8899001122',
      firstName: 'Sara',
      lastName: 'Tile',
      companyName: 'Roof Repair Co.',
      role: 'USER',
      providerType: 'ROOFER',
    },
    {
      email: 'locksmith@example.com',
      phone: '+9900112233',
      firstName: 'Jake',
      lastName: 'Lock',
      companyName: 'Lock Masters',
      role: 'USER',
      providerType: 'LOCKSMITH',
    },
    {
      email: 'pestcontrol@example.com',
      phone: '+0011223344',
      firstName: 'Linda',
      lastName: 'Bug',
      companyName: 'Pest Control Experts',
      role: 'USER',
      providerType: 'PEST_CONTROL',
    },
    {
      email: 'moving@example.com',
      phone: '+1122003344',
      firstName: 'Chris',
      lastName: 'Mover',
      companyName: 'Moving Pros',
      role: 'USER',
      providerType: 'MOVING',
    },
    {
      email: 'poolservice@example.com',
      phone: '+2233445566',
      firstName: 'Diana',
      lastName: 'Swim',
      companyName: 'Pool Care',
      role: 'USER',
      providerType: 'POOL_SERVICE',
    },
    {
      email: 'handyman@example.com',
      phone: '+3344556677',
      firstName: 'Nathan',
      lastName: 'Fix',
      companyName: 'Handyman Helpers',
      role: 'USER',
      providerType: 'HANDYMAN',
    },
    {
      email: 'security@example.com',
      phone: '+4455667788',
      firstName: 'Betty',
      lastName: 'Safe',
      companyName: 'Secure Home',
      role: 'USER',
      providerType: 'SECURITY',
    },
  ];
  

  const metadata = {
    title: "Prestataire",
    Breadcrumb: "Admin/Prestataire",
  };

  const tabContent = [
    {
      name: 'Statistics',
      component: (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <UpcountStat label="Completed Tasks" value={120} icon={BsCheck}/>
            <UpcountStat label="Active Tasks" value={30} icon={SiStreamrunners}/>
            <UpcountStat label="Pending Requests" value={10} icon={MdPendingActions}/>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Graph />
            <Graph />
          </div>
        </div>
      ),
    },
    {
      name: 'Calendar',
      component: <WeekCalendar />,
    },
    {
      name: 'Modify',
      component: <ProviderModificationForm />,
    },
  ];

  // Animation settings for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Stagger effect with a slight delay for each card
        duration: 0.5,
      },
    }),
  };

  return (
    <ProviderContextProvider>
      <DashboardLayout 
        sidebar={<Sidebar />} 
        navbar={<Navbar breadCrumb={metadata.Breadcrumb} pageTitle={metadata.title} />}
      >
        <OneTierContent>
          <div className="max-h-screen px-3 overflow-y-auto scrollbar-hide">
            <ul className="space-y-4">
              {providers.map((provider, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                >
                  <ProviderCard
                    email={provider.email}
                    phone={provider.phone}
                    firstName={provider.firstName}
                    lastName={provider.lastName}
                    companyName={provider.companyName}
                    role={provider.role}
                    providerType={provider.providerType}
                    onClick={() => useProviderContext().selectProvider(provider)} 
                  />
                </motion.li>
              ))}
            </ul>
          </div>
          <TabNavigation tabs={tabContent} />
        </OneTierContent>
      </DashboardLayout>
    </ProviderContextProvider>
  );
};

export default ProvidersPage;
