import React from 'react';
import { Bell, Mail, MessageSquare, AlertTriangle, Save } from 'lucide-react';

const NotificationSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Notification Settings</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700">
          <Save className="h-5 w-5 mr-2" />
          Save Changes
        </button>
      </div>

      <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Email Notifications</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-warning-500 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Compliance Alerts</p>
                  <p className="text-sm text-gray-500">Receive notifications for compliance-related issues</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Bell className="h-5 w-5 text-primary-500 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">System Notifications</p>
                  <p className="text-sm text-gray-500">Updates about system maintenance and new features</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 text-secondary-500 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Task Notifications</p>
                  <p className="text-sm text-gray-500">Notifications about assigned tasks and updates</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Email Recipients</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="primaryEmail" className="block text-sm font-medium text-gray-700">
                Primary Email
              </label>
              <input
                type="email"
                name="primaryEmail"
                id="primaryEmail"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                defaultValue="admin@example.com"
              />
            </div>
            <div>
              <label htmlFor="ccEmails" className="block text-sm font-medium text-gray-700">
                CC Recipients
              </label>
              <input
                type="text"
                name="ccEmails"
                id="ccEmails"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                placeholder="Enter email addresses separated by commas"
              />
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Notification Schedule</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Daily Digest Time
              </label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              >
                <option>8:00 AM</option>
                <option>12:00 PM</option>
                <option>4:00 PM</option>
                <option>8:00 PM</option>
              </select>
            </div>
            <div className="flex items-center">
              <input
                id="weekendsOnly"
                name="weekendsOnly"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="weekendsOnly" className="ml-2 block text-sm text-gray-900">
                Send notifications on weekends only for urgent matters
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;