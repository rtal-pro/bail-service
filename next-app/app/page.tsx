import React from 'react';
import OneTierLayout from '../layouts/OneTierLayout';

const MyNavbar = () => (
  <div>
    <p>Navbar content goes here</p>
  </div>
);

const MySidebar = () => (
  <div className='h-full'>
    <p>Sidebar content goes here</p>
  </div>
);

const MyPage = () => (
  <OneTierLayout sidebar={<MySidebar />} navbar={<MyNavbar />}>
    <div className=''>
      <h2 className="min-h-screen text-xl font-semibold mb-4">Column 1 Content</h2>
      <p>This content will take 1/3 of the space.</p>
    </div>
    <div className='font-black'>
      <h2 className="text-xl font-semibold mb-4">Column 2 Content</h2>
      <p>This content will take 2/3 of the space.</p>
    </div>
  </OneTierLayout>
);

export default MyPage;
