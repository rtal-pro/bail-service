import React from 'react';

interface BreadcrumbProps {
    breadcrumb: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = () => {
    return (
        <div className="text-sm text-gray-300">
            {breadcrumb}
        </div>
    );
};

export default Breadcrumb;