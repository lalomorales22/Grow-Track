import React from 'react';
import { Link } from 'react-router-dom';
import { Settings as SettingsIcon, Users, Building, Bell, Shield, Database } from 'lucide-react';

const Settings: React.FC = () => {
  const settingsCategories = [
    {
      id: 'users',
      name: 'User Management',
      description: 'Manage user accounts, roles, and permissions',
      icon: Users,
      path: '/settings/users'
    },
    {
      id: 'facility',
      name: 'Facility Settings',
      description: 'Configure facility details, rooms, and locations',
      icon: Building,
      path: '/settings/facility'
    },
    {
      id: 'notifications',
      name: 'Notifications',
      description: 'Set up email notifications and alerts',
      icon: Bell,
      path: '/settings/notifications'
    },
    {
      id: 'security',
      name: 'Security Settings',
      description: 'Configure security policies and access controls',
      icon: Shield,
      path: '/settings/security'
    },
    {
      id: 'integrations',
      name: 'Integrations',
      description: 'Manage third-party integrations and APIs',
      icon: Database,
      path: '/settings/integrations'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {settingsCategories.map((category) => (
          <Link
            key={category.id}
            to={category.path}
            className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                  <category.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {category.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <div className="rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              System Information
            </h3>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                <dt className="truncate text-sm font-medium text-gray-500">Version</dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">1.0.0</dd>
              </div>
              <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                <dt className="truncate text-sm font-medium text-gray-500">Last Updated</dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">Today</dd>
              </div>
              <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                <dt className="truncate text-sm font-medium text-gray-500">Database Status</dt>
                <dd className="mt-1">
                  <span className="inline-flex items-center rounded-full bg-success-100 px-3 py-1 text-sm font-medium text-success-700">
                    Connected
                  </span>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;