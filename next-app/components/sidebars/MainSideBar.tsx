import React from 'react';
import { FaTachometerAlt, FaTable, FaFileInvoiceDollar, FaVrCardboard, FaCogs, FaUser, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Sidebar: React.FC = () => {
    return (
        <div className="h-full w-64 bg-white shadow-lg p-4">
            {/* Logo */}
            <div className="flex items-center mb-10">
                <div className="text-2xl font-bold flex items-center">
                    <span className="mr-2">😊</span>
                    <span>Soft UI Dashboard</span>
                </div>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-2">
                <ul className="space-y-2">
                    <li className="relative">
                        <a href="#" className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-blue-50">
                            <FaTachometerAlt className="w-5 h-5 text-blue-600" />
                            <span className="ml-4">Dashboard</span>
                        </a>
                    </li>
                    <li className="relative">
                        <a href="#" className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-blue-50">
                            <FaTable className="w-5 h-5 text-blue-600" />
                            <span className="ml-4">Tables</span>
                        </a>
                    </li>
                    <li className="relative">
                        <a href="#" className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-blue-50">
                            <FaFileInvoiceDollar className="w-5 h-5 text-blue-600" />
                            <span className="ml-4">Billing</span>
                        </a>
                    </li>
                    <li className="relative">
                        <a href="#" className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-blue-50">
                            <FaVrCardboard className="w-5 h-5 text-blue-600" />
                            <span className="ml-4">Virtual Reality</span>
                        </a>
                    </li>
                    <li className="relative">
                        <a href="#" className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-blue-50">
                            <FaCogs className="w-5 h-5 text-blue-600" />
                            <span className="ml-4">RTL</span>
                        </a>
                    </li>
                </ul>

                <hr className="my-4" />

                <ul className="space-y-2">
                    <li className="relative">
                        <a href="#" className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-pink-50 bg-pink-100 shadow-md">
                            <FaUser className="w-5 h-5 text-pink-600" />
                            <span className="ml-4">Profile</span>
                        </a>
                    </li>
                    <li className="relative">
                        <a href="#" className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-blue-50">
                            <FaSignInAlt className="w-5 h-5 text-blue-600" />
                            <span className="ml-4">Sign In</span>
                        </a>
                    </li>
                    <li className="relative">
                        <a href="#" className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-blue-50">
                            <FaUserPlus className="w-5 h-5 text-blue-600" />
                            <span className="ml-4">Sign Up</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
