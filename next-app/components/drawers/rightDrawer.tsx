import React from 'react';

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const RightDrawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
            />

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <button
                    className="absolute top-4 right-4 text-gray-600"
                    onClick={onClose}
                >
                    Close
                </button>
                <div className="p-4">{children}</div>
            </div>
        </>
    );
};

export default RightDrawer;
