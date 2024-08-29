"use client";

import React from 'react';
import SideBarItem from './SideBarItem';
import {GrCluster} from 'react-icons/gr';
import {AiOutlineDashboard} from 'react-icons/ai';
import {FaBuilding,FaTools,FaUser} from 'react-icons/fa';
import {MdOutlineQrCode2, MdLogout} from 'react-icons/md'

const SideBar: React.FC = () => {
    return (
        <div className="h-full w-full shadow-xl rounded-xl flex flex-col text-slate-800">
            {/* Logo */}
            <div className="flex flex-col pb-5">
                <div className="flex font-bold justify-center text-pretty">
                    BAIL SERVICE
                </div>
            </div>

            <hr className="my-4" />

            {/* Navigation Links */}
            <nav className="flex-1 space-y-4">
                <ul className="space-y-4">
                    <SideBarItem icon={AiOutlineDashboard} label="Dashboard" href="dashboard" />
                    <SideBarItem icon={FaTools} label="Prestataire" href="providers" />
                    <SideBarItem icon={GrCluster} label="Cluster" href="cluster" />
                    <SideBarItem icon={FaBuilding} label="Batiment" href="building" />
                    <SideBarItem icon={MdOutlineQrCode2} label="Spots" href="spots" />
                </ul>
                <hr className="my-4" />
                <ul className="space-y-2">
                    <SideBarItem icon={FaUser} label="Profile" href="test"/>
                    <SideBarItem icon={MdLogout} label="Logout" href="test"/>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;