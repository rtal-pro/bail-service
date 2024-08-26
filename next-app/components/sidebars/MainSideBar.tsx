import React from 'react';
import SideBarItem from './SideBarItem';
import {
    FaTachometerAlt,
    FaTable,
    FaFileInvoiceDollar,
    FaVrCardboard,
    FaCogs,
    FaUser,
    FaSignInAlt,
    FaUserPlus
} from 'react-icons/fa';

const SideBar: React.FC = () => {
    return (
        <div className="h-full w-64 bg-white shadow-lg  rounded-lg flex flex-col">
            {/* Logo */}
            <div className="mb-10">
                <div className="text-2xl font-bold">
                    Soft UI Dashboard
                </div>
            </div>

            <hr className="my-4" />

            {/* Navigation Links */}
            <nav className="flex-1 space-y-4">
                <ul className="space-y-2">
                    <SideBarItem icon={FaTachometerAlt} label="Dashboard" href="test" />
                    <SideBarItem icon={FaTable} label="Tables" href="test" />
                    <SideBarItem icon={FaFileInvoiceDollar} label="Billing" href="test" />
                    <SideBarItem icon={FaVrCardboard} label="Virtual Reality" href="test" />
                    <SideBarItem icon={FaCogs} label="RTL" href="test" />
                </ul>

                <hr className="my-4" />

                <ul className="space-y-2">
                    <SideBarItem icon={FaUser} label="Profile" href="test" active />
                    <SideBarItem icon={FaSignInAlt} label="Sign In" href="test" />
                    <SideBarItem icon={FaUserPlus} label="Sign Up" href="test" />
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;