import React from "react";
import { IconType } from "react-icons"; // Import IconType for better typing

interface SidebarItemProps {
    icon: React.ElementType;
    label: string;
    href: string;
    active?: boolean;
}

const SideBarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, href, active = false }) => {
    return (
        <li className={`relative`}>
            <a
                href={href}
                className={`flex items-center p-3 text-gray-700 rounded-lg 
                ${active ? 'bg-pink-100 text-pink-600 shadow-md' : 'hover:bg-blue-50'}`}
            >
                <Icon className={`w-5 h-5 ${active ? 'text-pink-600' : 'text-blue-600'}`} />
                <span className="ml-4">{label}</span>
            </a>
        </li>
    );
};

export default SideBarItem;