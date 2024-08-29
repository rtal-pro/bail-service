"use client"; // This directive makes the component a Client Component

import React from 'react';

interface ContentProps {
    children: React.ReactNode[];
}

const OneTierContent: React.FC<ContentProps> = ({ children}) => {
    return (
        <div className="h-full w-full flex">
            <div className="min-h-screen w-1/3 rounded-xl p-4 mr-5 shadow-xl">
                {children[0]}
            </div>
            <div className="h-full w-2/3 rounded-xl p-4 shadow-xl">
                {children[1]}
            </div>
        </div>
    );
};

export default OneTierContent;
