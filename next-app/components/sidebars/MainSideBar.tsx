"use client";

import React, { useState } from 'react';
import SideBarItem from './SideBarItem';
import { GrCluster } from 'react-icons/gr';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FaBuilding, FaTools, FaUser } from 'react-icons/fa';
import { MdOutlineQrCode2, MdLogout } from 'react-icons/md';

const SideBar: React.FC = () => {
    const [activeItem, setActiveItem] = useState<string>('/providers');

    const handleSetActive = (href: string) => {
        setActiveItem(href);
    };

    return (
        <div className="h-screen w-full shadow-xl rounded-xl flex flex-col bg-white text-slate-800 sticky top-4">
            {/* Logo */}
            <div className="flex items-center justify-center p-4">
                <img src="/next.svg" alt="logo" className="h-20 w-20" />
                {/* <span className="text-xl font-bold ml-2">Bail Service</span> */}
            </div>

            {/* Navigation Titles and Links */}
            <nav className="flex-1 space-y-4 overflow-y-auto px-4">
                <hr className="border-t border-gray-200" />
                <div className="font-semibold text-gray-400 mt-4"></div>
                <ul className="space-y-4">
                    <SideBarItem
                        icon={AiOutlineDashboard}
                        label="Dashboard"
                        href="/dashboard"
                        color="text-blue-600"
                        active={activeItem === '/dashboard'}
                        onClick={() => handleSetActive('/dashboard')}
                    />
                    <SideBarItem
                        icon={FaTools}
                        label="Prestataire"
                        href="/providers"
                        color="text-green-600"
                        active={activeItem === '/providers'}
                        onClick={() => handleSetActive('/providers')}
                    />
                    <SideBarItem
                        icon={GrCluster}
                        label="Cluster"
                        href="/cluster"
                        color="text-purple-600"
                        active={activeItem === '/cluster'}
                        onClick={() => handleSetActive('/cluster')}
                    />
                    <SideBarItem
                        icon={FaBuilding}
                        label="Batiment"
                        href="/building"
                        color="text-yellow-600"
                        active={activeItem === '/building'}
                        onClick={() => handleSetActive('/building')}
                    />
                    <SideBarItem
                        icon={MdOutlineQrCode2}
                        label="Spots"
                        href="/spots"
                        color="text-red-600"
                        active={activeItem === '/spots'}
                        onClick={() => handleSetActive('/spots')}
                    />
                </ul>

                <div className="font-semibold text-gray-400 mt-4">Account Settings</div>
                <ul className="space-y-2">
                    <SideBarItem
                        icon={FaUser}
                        label="Profile"
                        href="/profile"
                        color="text-indigo-600"
                        active={activeItem === '/profile'}
                        onClick={() => handleSetActive('/profile')}
                    />
                    <SideBarItem
                        icon={MdLogout}
                        label="Logout"
                        href="/logout"
                        color="text-gray-600"
                        active={activeItem === '/logout'}
                        onClick={() => handleSetActive('/logout')}
                    />
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;
