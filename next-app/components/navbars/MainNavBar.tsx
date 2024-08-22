import React from 'react';

interface NavbarProps {
    breadCrumb?: string;
    pageTitle?: string;
    onButtonClick1?: () => void;
    onButtonClick2?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ breadCrumb, pageTitle, onButtonClick1, onButtonClick2 }) => {
    return (
        <div className='h-full flex items-center justify-between'>
            {/* Left Side: Breadcrumb and Page Title */}
            <div className='flex flex-col'>
                {breadCrumb && <div className='text-sm text-gray-300'>{breadCrumb}</div>}
                {pageTitle && <h2 className="text-2xl font-semibold">{pageTitle}</h2>}
            </div>

            {/* Right Side: Buttons */}
            <div className='flex space-x-4'>
                <button
                    onClick={onButtonClick1}
                    className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'
                >
                    Button 1
                </button>
                <button
                    onClick={onButtonClick2}
                    className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600'
                >
                    Button 2
                </button>
            </div>
        </div>
    );
};

export default Navbar;
