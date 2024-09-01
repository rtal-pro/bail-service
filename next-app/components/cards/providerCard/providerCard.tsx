"use client";

import React from 'react';
import { 
  FaBroom, FaBolt, FaWrench, FaHammer, FaPaintBrush, FaLeaf, 
  FaSnowflake, FaLaptop, FaTractor, FaKey, FaBug, FaTruck, 
  FaSwimmer, FaToolbox, FaShieldAlt, FaSignOutAlt 
} from 'react-icons/fa';
import { useTheme } from '@/contexts/ThemeContext';

interface ProviderCardProps {
  email: string;
  phone: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  providerType: string;
  onClick?: () => void; 
}

const providerTypeData = {
  CLEANER: {
    icon: <FaBroom className="text-sidebarIcon1" />,
    color: 'from-sidebarIcon1 to-sidebarIcon2',
  },
  ELECTRICIAN: {
    icon: <FaBolt className="text-sidebarIcon3" />,
    color: 'from-sidebarIcon3 to-sidebarIcon4',
  },
  PLUMBER: {
    icon: <FaWrench className="text-sidebarIcon5" />,
    color: 'from-sidebarIcon5 to-sidebarIcon6',
  },
  CARPENTER: {
    icon: <FaHammer className="text-sidebarIcon7" />,
    color: 'from-sidebarIcon7 to-sidebarIcon8',
  },
  PAINTER: {
    icon: <FaPaintBrush className="text-sidebarIcon9" />,
    color: 'from-sidebarIcon9 to-sidebarIcon10',
  },
  GARDENER: {
    icon: <FaLeaf className="text-sidebarIcon11" />,
    color: 'from-sidebarIcon11 to-sidebarIcon12',
  },
  HVAC: {
    icon: <FaSnowflake className="text-sidebarIcon13" />,
    color: 'from-sidebarIcon13 to-sidebarIcon14',
  },
  IT_SUPPORT: {
    icon: <FaLaptop className="text-sidebarIcon15" />,
    color: 'from-sidebarIcon15 to-sidebarIcon16',
  },
  LANDSCAPER: {
    icon: <FaTractor className="text-sidebarIcon2" />,
    color: 'from-sidebarIcon2 to-sidebarIcon3',
  },
  ROOFER: {
    icon: <FaHammer className="text-sidebarIcon4" />,
    color: 'from-sidebarIcon4 to-sidebarIcon5',
  },
  LOCKSMITH: {
    icon: <FaKey className="text-sidebarIcon6" />,
    color: 'from-sidebarIcon6 to-sidebarIcon7',
  },
  PEST_CONTROL: {
    icon: <FaBug className="text-sidebarIcon8" />,
    color: 'from-sidebarIcon8 to-sidebarIcon9',
  },
  MOVING: {
    icon: <FaTruck className="text-sidebarIcon10" />,
    color: 'from-sidebarIcon10 to-sidebarIcon11',
  },
  POOL_SERVICE: {
    icon: <FaSwimmer className="text-sidebarIcon12" />,
    color: 'from-sidebarIcon12 to-sidebarIcon13',
  },
  HANDYMAN: {
    icon: <FaToolbox className="text-sidebarIcon14" />,
    color: 'from-sidebarIcon14 to-sidebarIcon15',
  },
  SECURITY: {
    icon: <FaShieldAlt className="text-sidebarIcon16" />,
    color: 'from-sidebarIcon16 to-sidebarIcon1',
  },
  OTHER: {
    icon: <FaSignOutAlt className="text-gray-700" />,
    color: 'from-gray-200 to-gray-300',
  },
};

const ProviderCard: React.FC<ProviderCardProps> = ({ onClick, email, phone, firstName, lastName, companyName, providerType }) => {
  const { icon, color } = providerTypeData[providerType as keyof typeof providerTypeData] || providerTypeData.OTHER;
  const { theme } = useTheme();
  
  return (
    <div 
      className={`relative p-4 rounded-xl shadow-xl bg-bgPrimary overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
    >
      {/* Diagonal Background */}
      {/* <div 
        className={`absolute inset-0 bg-gradient-to-r ${color} transform -skew-y-4 origin-bottom-right z-0 transition-all duration-300`} 
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 50%)' }}
      ></div> */}

      <div className="relative z-10 flex items-center space-x-4 ">
        <div className="p-2 bg-white rounded-full shadow cursor-pointer" onClick={onClick}>
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-textMain">{companyName || 'No Company Name'}</h3>
          <p className="text-sm text-textMainLight">{`${firstName || ''} ${lastName || ''}`.trim()}</p>
          <p className="text-sm text-textMainLight">{email}</p>
          <p className="text-sm text-textMainLight">{phone}</p>
        </div>
      </div>

      {/* Provider Type Chip */}
      <div 
        className={`absolute bottom-2 right-2 text-white text-xs font-semibold px-2 py-1 rounded bg-gradient-to-r ${color}`}
      >
        {providerType}
      </div>
    </div>
  );
};

export default ProviderCard;
