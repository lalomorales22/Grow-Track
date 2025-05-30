import React from 'react';
import { History, Filter, Search, Download } from 'lucide-react';
import { format } from 'date-fns';

const ActivityLog: React.FC = () => {
  // Mock data for demonstration
  const activities = [
    {
      id: 1,
      user: 'John Doe',
      action: 'Created package PKG-123',
      category: 'Package',
      timestamp: new Date(2024, 2, 1, 14, 30),
      details: 'Created package from harvest batch HRV-456',
    },
    {
      id: 2,
      user: 'Jane Smith',
      action: 'Updated plant status',
      category: 'Plant',
      timestamp: new Date(2024, 2, 1, 13, 15),
      details: 'Changed growth phase to flowering for 10 plants',
    },
    {
      id: 3,
      user: 'Mike Johnson',
      action: 'Initiated transfer',
      category: 'Transfer',
      timestamp: new Date(2024, 2, 1, 11, 45),
      details: 'Created transfer manifest TM-789',
    },
    {
      id: 4,
      user: 'Sarah Wilson',
      action: 'Adjusted inventory',
      category: 'Inventory',
      timestamp: new Date(2024, 2, 1, 10, 20),
      details: 'Reconciled inventory for Vault A',
    },
    {
      id: 5,
      user: 'Tom Brown',
      action: 'Generated tags',
      category: 'Tags',
      timestamp: new Date(2024, 2, 1, 9, 0),
      details: 'Generated 100 plant tags',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Activity Log</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700">
          <Download className="mr-2 h-5 w-5" /> Export Log
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="w-full sm:w-64 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Search activities..."
              />
            </div>
            <div className="flex items-center space-x-3">
              <button className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                <Filter className="mr-2 h-5 w-5" />
                Filter
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Details
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {activities.map((activity) => (
                <tr key={activity.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {format(activity.timestamp, 'MMM d, h:mm a')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {activity.user}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      activity.category === 'Package' 
                        ? 'bg-blue-100 text-blue-800'
                        : activity.category === 'Plant'
                        ? 'bg-success-100 text-success-800'
                        : activity.category === 'Transfer'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {activity.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {activity.action}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {activity.details}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
                <span className="font-medium">50</span> activities
              </p>
            </div>
            <div className="flex-1 flex justify-end">
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </button>
              <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;