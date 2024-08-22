import React from 'react';
import OneTierLayout from '../layouts/OneTierLayout';
import MainNavbar from '../components/navbars/MainNavBar';

const MySidebar = () => (
  <div className='h-full'>
    <p>Sidebar content goes here</p>
  </div>
);

const MyPage = () => {
  const handleButtonClick1 = () => {
    console.log('Button 1 clicked');
  };

  const handleButtonClick2 = () => {
    console.log('Button 2 clicked');
  };

  return (
    <OneTierLayout sidebar={<MySidebar />} navbar={<MainNavbar breadCrumb={"Pages/Dashboard"} pageTitle={'Dashboard'} />}>
      <div className=''>
        <h2 className="min-h-screen text-xl font-semibold mb-4">Column 1 Content</h2>
        <p>This content will take 1/3 of the space.</p>
      </div>
      <div className='font-black'>
        <h2 className="text-xl font-semibold mb-4">Column 2 Content</h2>
        <p>This content will take 2/3 of the space.</p>
      </div>
    </OneTierLayout>
  )
};

export default MyPage;
