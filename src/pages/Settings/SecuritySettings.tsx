import React from 'react';
import { Shield, Key, Lock, UserCheck, Save } from 'lucide-react';

const SecuritySettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Security Settings</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700">
          <Save className="h-5 w-5 mr-2" />
          Save Changes
        </button>
      </div>

      <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Password Policy</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Key className="h-5 w-5 text-primary-500 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Minimum Password Length</p>
                  <p className="text-sm text-gray-500">Set the minimum required length for passwords</p>
                </div>
              </div>
              <select className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
                <option>8 characters</option>
                <option>10 characters</option>
                <option>12 characters</option>
                <option>14 characters</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Lock className="h-5 w-5 text-primary-500 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Password Complexity</p>
                  <p className="text-sm text-gray-500">Require special characters and numbers</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-primary-500 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Password Expiration</p>
                  <p className="text-sm text-gray-500">Force password change after specified period</p>
                </div>
              </div>
              <select className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
                <option>30 days</option>
                <option>60 days</option>
                <option>90 days</option>
                <option>Never</option>
              </select>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Two-Factor Authentication</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <UserCheck className="h-5 w-5 text-primary-500 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Require 2FA</p>
                  <p className="text-sm text-gray-500">Enable two-factor authentication for all users</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">2FA Method</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
                <option>Authenticator App</option>
                <option>SMS</option>
                <option>Email</option>
              </select>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Session Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Session Timeout</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
                <option>15 minutes</option>
                <option>30 minutes</option>
                <option>1 hour</option>
                <option>4 hours</option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                id="concurrent-sessions"
                name="concurrent-sessions"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="concurrent-sessions" className="ml-2 block text-sm text-gray-900">
                Allow concurrent sessions
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;