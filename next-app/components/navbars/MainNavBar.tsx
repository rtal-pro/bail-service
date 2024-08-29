import React from 'react';

interface NavbarProps {
    breadCrumb?: string;
    pageTitle?: string;
}

const Navbar: React.FC<NavbarProps> = ({ breadCrumb, pageTitle}) => {
    return (
        <div className='px-4 h-full flex items-center justify-between rounded-xl shadow-xl'>
            test
        </div>
        
    );
};

export default Navbar;
