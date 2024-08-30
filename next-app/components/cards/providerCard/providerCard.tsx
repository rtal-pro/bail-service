import React from 'react';
import { FaBroom, FaBolt, FaWrench, FaHammer, FaPaintBrush, FaLeaf, FaSnowflake, FaLaptop } from 'react-icons/fa';

interface ProviderCardProps {
  email: string;
  phone: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  providerType: string;
}

const providerTypeData = {
  CLEANER: {
    icon: <FaBroom className="text-gray-700" />,
    color: 'from-blue-200 to-blue-300',
  },
  ELECTRICIAN: {
    icon: <FaBolt className="text-gray-700" />,
    color: 'from-yellow-200 to-yellow-300',
  },
  PLUMBER: {
    icon: <FaWrench className="text-gray-700" />,
    color: 'from-teal-200 to-teal-300',
  },
  CARPENTER: {
    icon: <FaHammer className="text-gray-700" />,
    color: 'from-orange-200 to-orange-300',
  },
  PAINTER: {
    icon: <FaPaintBrush className="text-gray-700" />,
    color: 'from-red-200 to-red-300',
  },
  GARDENER: {
    icon: <FaLeaf className="text-gray-700" />,
    color: 'from-green-200 to-green-300',
  },
  HVAC: {
    icon: <FaSnowflake className="text-gray-700" />,
    color: 'from-purple-200 to-purple-300',
  },
  IT_SUPPORT: {
    icon: <FaLaptop className="text-gray-700" />,
    color: 'from-indigo-200 to-indigo-300',
  },
  OTHER: {
    icon: <FaLaptop className="text-gray-700" />,
    color: 'from-gray-200 to-gray-300',
  }
};

const ProviderCard: React.FC<ProviderCardProps> = ({ email, phone, firstName, lastName, companyName, providerType }) => {
  const { icon, color } = providerTypeData[providerType as keyof typeof providerTypeData] || providerTypeData.OTHER;

  return (
    <div className="relative p-4 rounded-xl shadow-xl bg-white overflow-hidden">
      {/* Diagonal Background */}
      <div className={`absolute inset-0 bg-gradient-to-r ${color} transform -skew-y-4 origin-bottom-right z-0`} style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 50%)' }}></div>

      <div className="relative z-10 flex items-center space-x-4">
        <div className="p-2 bg-white rounded-full shadow">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{companyName || 'No Company Name'}</h3>
          <p className="text-sm text-gray-600">{`${firstName || ''} ${lastName || ''}`.trim()}</p>
          <p className="text-sm text-gray-600">{email}</p>
          <p className="text-sm text-gray-600">{phone}</p>
        </div>
      </div>

      {/* Provider Type Chip */}
      <div className={`absolute bottom-2 right-2 text-white text-xs font-semibold px-2 py-1 rounded bg-gradient-to-r ${color}`}>
        {providerType}
      </div>
    </div>
  );
};

export default ProviderCard;
