// components/Layout.tsx
import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-gray-800 text-white p-4">
                <h1 className="text-xl font-semibold">My Dashboard</h1>
            </header>

            {/* Main Content */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="w-64 bg-gray-700 text-white p-4 flex-shrink-0">
                    <nav>
                        <ul>
                            <li className="py-2"><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                            <li className="py-2"><a href="#" className="text-gray-300 hover:text-white">Profile</a></li>
                            <li className="py-2"><a href="#" className="text-gray-300 hover:text-white">Settings</a></li>
                        </ul>
                    </nav>
                </aside>

                {/* Full-width Content */}
                <main className="flex-1 bg-gray-100 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
