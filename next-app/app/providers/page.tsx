"use client";

import React from 'react';
import OneTierContent from '../../layouts/OneTierContent';
import DashboardLayout from '@/layouts/DashboardLayout';
import Navbar from '@/components/navbars/MainNavBar';
import ProviderCard from '@/components/cards/providerCard/providerCard';
import TabNavigation from '@/components/navbars/TabNavigation';// Import the ProviderCard component
import Sidebar from '@/components/sidebars/MainSideBar';

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
  ];

  const metadata = {
    title: "Prestataire",
    Breadcrumb: "Admin/Prestataire",
  };

  return (
    <DashboardLayout 
      sidebar={<Sidebar/>} 
      navbar={<Navbar breadCrumb={metadata.Breadcrumb} pageTitle={metadata.title}/>}
    >
      <OneTierContent>
      <ul className="space-y-4">
        {providers.map((provider, index) => (
          <ProviderCard
            key={index}
            email={provider.email}
            phone={provider.phone}
            firstName={provider.firstName}
            lastName={provider.lastName}
            companyName={provider.companyName}
            role={provider.role}
            providerType={provider.providerType}
          />

        ))}
      </ul>
      <div>
        toto
      </div>
      </OneTierContent>
    </DashboardLayout>
  );
};

export default ProvidersPage;
