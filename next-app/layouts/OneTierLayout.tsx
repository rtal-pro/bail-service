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
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
                <aside className="w-64 bg-slate-400 p-4 flex-shrink-0">
                    {sidebar}
                </aside>

                {/* Navbar and Content */}
                <div className="flex flex-col flex-1">
                    <div className="h-16 px-4">
                        <header
                            className={`h-16  ${isSticky
                                ? 'fixed top-0 w-full z-10 m-2 px-4 rounded-lg shadow-lg'
                                : 'relative m-2 px-4 rounded-lg bg-slate-400'
                                }`}
                            style={{
                                transition: 'box-shadow .25s ease-in, background-color .25s ease-in',
                                boxShadow: isSticky ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
                                backdropFilter: isSticky ? 'blur(8px)' : 'none',
                            }}
                        >
                            {navbar}
                        </header>
                    </div>

                    {/* Full-width Content with 1/3 2/3 Layout */}
                    <main className="flex-1 pt-8 p-4 m-2">
                        <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-1 bg-slate-600 rounded-lg shadow">
                                {children && children[0]}
                            </div>
                            <div className="col-span-2 bg-slate-600 rounded-lg shadow">
                                {children && children[1]}
                            </div>
                        </div>
                    </main>

                    {/* Drawer */}
                    <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                        <h2 className="text-xl font-semibold mb-4">Drawer Content</h2>
                        <p>Some content for the drawer.</p>
                    </Drawer>
                </div>
            </div>
        </div>
    );
};

export default OneTiersLayout;
