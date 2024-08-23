"use client";

import React from 'react';
import OneTierLayout from '@/layouts/OneTierLayout';
import MainNavbar from '@/components/navbars/MainNavBar';
import ProviderCard from '@/components/cards/providerCard/providerCard';
import TabNavigation from '@/components/navbars/TabNavigation';// Import the ProviderCard component
import MainSidebar from '@/components/sidebars/MainSideBar';

const MyPage = () => {
  const handleButtonClick1 = () => {
    console.log('Button 1 clicked');
  };

  const handleButtonClick2 = () => {
    console.log('Button 2 clicked');
  };

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

  return (
    <OneTierLayout
      sidebar={<MainNavbar />}
      navbar={<MainNavbar breadCrumb={"Pages/Dashboard"} pageTitle={'Dashboard'} />}
    >
      <div className="space-y-4">
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
      </div>
      <div className='font-black'>
        <TabNavigation />
      </div>
    </OneTierLayout>
  );
};

export default MyPage;
