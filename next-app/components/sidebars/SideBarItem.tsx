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
        <div className="ml-4 flex">
            <div className="flex p-2 rounded-lg border border-indigo-500">
                <Icon className="h-4 w-4"/>
            </div>
        </div>
    );
};

export default SideBarItem;