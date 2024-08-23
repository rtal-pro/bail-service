"use client"; // This directive makes the component a Client Component

import React, { useEffect, useState } from 'react';
import Drawer from '../components/drawers/rightDrawer';

interface LayoutProps {
    children: React.ReactNode[];
    sidebar: React.ReactNode;
    navbar: React.ReactNode;
}

const OneTiersLayout: React.FC<LayoutProps> = ({ children, sidebar, navbar }) => {
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        setIsSticky(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="w-64 bg-slate-400 p-4">
                    {sidebar}
                </aside>

                {/* Main content */}
                <div className="flex-1 flex flex-col p-8">
                    {/* Navbar */}
                    <div className="h-16">

                        {/* Sticky Navbar */}
                        <header
                            className={`h-16 flex rounded-lg items-center  ${isSticky
                                ? 'fixed left-66 top-8 right-2 z-10 px-4 shadow-lg'
                                : 'relative px-4 mx-2'
                                }`}
                            style={{
                                transition: 'box-shadow .25s ease-in, background-color .25s ease-in',
                                backdropFilter: isSticky ? 'blur(16px)' : 'none',
                                boxShadow: isSticky ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
                                width: isSticky ? 'calc(100% - 20rem)' : 'auto', // 16rem est la largeur du sidebar avec padding
                            }}
                        >
                            <div className="w-full">
                                {navbar}
                            </div>
                        </header>
                    </div>

                    {/* Content */}
                    <main className="flex-1 p-6 mt-20">
                        <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-1 rounded-lg">
                                {children && children[0]}
                            </div>
                            <div className="col-span-2 bg-orange-300 rounded-lg">
                                {children && children[1]}
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            {/* Drawer */}
            <Drawer isOpen={false} onClose={() => { }}>
                <h2 className="text-xl font-semibold mb-4">Drawer Content</h2>
                <p>Some content for the drawer.</p>
            </Drawer>
        </div>
    );
};

export default OneTiersLayout;
