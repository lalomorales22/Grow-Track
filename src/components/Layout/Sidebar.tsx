import React from 'react';
import { NavLink } from 'react-router-dom';
import { Plane as Plant, Package, TruckIcon, LayoutDashboard, Settings, Users, Leaf, Tag, History, FileText } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { cn } from '../../utils/cn';

const Sidebar: React.FC = () => {
  const { user } = useAuth();
  
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Plants', href: '/plants', icon: Plant },
    { name: 'Packages', href: '/packages', icon: Package },
    { name: 'Transfers', href: '/transfers', icon: TruckIcon },
    { name: 'Tags', href: '/tags', icon: Tag },
    { name: 'Inventory', href: '/inventory', icon: Leaf },
    { name: 'Activity Log', href: '/activity', icon: History },
    { name: 'CDCC Reports', href: '/cdcc', icon: FileText },
    { name: 'Users', href: '/settings/users', icon: Users },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <div className="flex flex-col w-64 bg-primary-900 text-white">
      <div className="flex items-center justify-center h-16 border-b border-primary-800">
        <h1 className="text-xl font-bold">GrowTrack</h1>
      </div>
      <div className="flex-1 overflow-y-auto py-4 px-3">
        <div className="mb-6 px-4 py-3 bg-primary-800 rounded-lg">
          <p className="text-sm font-medium text-gray-300">License</p>
          <p className="text-sm font-bold truncate">
            {user?.license || 'CCL-12345678'}
          </p>
          <p className="text-sm font-medium text-gray-300 mt-2">Facility</p>
          <p className="text-sm font-bold truncate">
            {user?.facility || 'Main Cultivation'}
          </p>
        </div>
        <ul className="space-y-1">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) => cn(
                  'flex items-center px-4 py-2.5 text-sm font-medium rounded-lg',
                  isActive
                    ? 'bg-primary-700 text-white'
                    : 'text-gray-300 hover:bg-primary-800 hover:text-white'
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 border-t border-primary-800">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-primary-700 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">{user?.name?.charAt(0) || 'U'}</span>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">{user?.name || 'User Name'}</p>
            <p className="text-xs text-gray-400">{user?.role || 'Admin'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;