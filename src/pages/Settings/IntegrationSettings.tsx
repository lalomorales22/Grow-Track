import React from 'react';
import { Database, Link, RefreshCw, Plus, Save } from 'lucide-react';

const IntegrationSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Integration Settings</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700">
          <Plus className="h-5 w-5 mr-2" />
          Add Integration
        </button>
      </div>

      <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Active Integrations</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Database className="h-6 w-6 text-primary-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">State Tracking System</h3>
                  <p className="text-sm text-gray-500">Connected and syncing</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-sm text-primary-600 hover:text-primary-900">Configure</button>
                <div className="h-4 w-4 rounded-full bg-success-400"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link className="h-6 w-6 text-secondary-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">POS System</h3>
                  <p className="text-sm text-gray-500">Last sync: 5 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-sm text-primary-600 hover:text-primary-900">Configure</button>
                <div className="h-4 w-4 rounded-full bg-success-400"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <RefreshCw className="h-6 w-6 text-warning-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">Analytics Platform</h3>
                  <p className="text-sm text-warning-500">Requires attention</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-sm text-primary-600 hover:text-primary-900">Configure</button>
                <div className="h-4 w-4 rounded-full bg-warning-400"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">API Configuration</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700">
                API Key
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="apiKey"
                  id="apiKey"
                  className="flex-1 min-w-0 block w-full rounded-none rounded-l-md border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                  value="••••••••••••••••"
                  readOnly
                />
                <button className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 text-sm">
                  Copy
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="webhookUrl" className="block text-sm font-medium text-gray-700">
                Webhook URL
              </label>
              <input
                type="text"
                name="webhookUrl"
                id="webhookUrl"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                placeholder="https://your-domain.com/webhook"
              />
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Sync Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Sync Frequency
              </label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
                <option>Real-time</option>
                <option>Every 5 minutes</option>
                <option>Every 15 minutes</option>
                <option>Every hour</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Last Sync Status</h3>
                <p className="text-sm text-gray-500">All systems synchronized successfully</p>
              </div>
              <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <RefreshCw className="h-4 w-4 mr-2" />
                Sync Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationSettings;