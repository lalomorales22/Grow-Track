import React from 'react';
import { Search, Menu } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import NotificationsDropdown from './NotificationsDropdown';
import HelpChat from './HelpChat';

const Header: React.FC = () => {
  const { logout } = useAuth();

  return (
    <header className="bg-white shadow-sm h-16 flex items-center px-4 sticky top-0 z-10">
      <button className="p-1 rounded-md md:hidden">
        <Menu className="h-6 w-6 text-gray-500" />
      </button>
      <div className="flex-1 flex items-center justify-between">
        <div className="flex-1 flex items-center ml-4 md:ml-0">
          <div className="max-w-lg w-full lg:max-w-xs relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              placeholder="Search..."
              type="search"
            />
          </div>
        </div>
        <div className="ml-4 flex items-center gap-4">
          <NotificationsDropdown />
          <button 
            onClick={() => logout()} 
            className="ml-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Sign out
          </button>
        </div>
      </div>
      <HelpChat />
    </header>
  );
};

export default Header;