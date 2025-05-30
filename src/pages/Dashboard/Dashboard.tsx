import React from 'react';
import { Leaf, Package, TruckIcon, AlertTriangle, Tag } from 'lucide-react';
import StatCard from '../../components/Dashboard/StatCard';
import ActivityLog from '../../components/Dashboard/ActivityLog';
import AlertsPanel from '../../components/Dashboard/AlertsPanel';
import Chart from '../../components/Dashboard/Chart';

const Dashboard: React.FC = () => {
  // Mock data for demonstration
  const stats = [
    { id: 1, name: 'Active Plants', value: '256', change: '+12%', icon: Leaf, color: 'bg-primary-500' },
    { id: 2, name: 'Active Packages', value: '184', change: '+5%', icon: Package, color: 'bg-secondary-500' },
    { id: 3, name: 'Pending Transfers', value: '8', change: '-2', icon: TruckIcon, color: 'bg-accent-500' },
    { id: 4, name: 'Available Tags', value: '532', change: 'N/A', icon: Tag, color: 'bg-purple-500' },
  ];

  // Mock compliance issues
  const complianceIssues = [
    { id: 1, severity: 'high', message: 'Inventory reconciliation required (5 days overdue)', area: 'Inventory' },
    { id: 2, severity: 'medium', message: 'Transfer #TR-12345 pending approval for 48+ hours', area: 'Transfers' },
    { id: 3, severity: 'low', message: '3 plants ready for harvest (Room A4)', area: 'Cultivation' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">
            Generate Reports
          </button>
        </div>
      </div>

      {complianceIssues.length > 0 && (
        <div className="bg-warning-50 border-l-4 border-warning-500 p-4 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-warning-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-warning-700">
                You have {complianceIssues.length} compliance {complianceIssues.length === 1 ? 'issue' : 'issues'} that require attention.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Inventory Overview</h3>
            <div className="mt-2 h-64">
              <Chart />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Compliance Alerts</h3>
          </div>
          <div className="border-t border-gray-200">
            <AlertsPanel issues={complianceIssues} />
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
        </div>
        <div className="border-t border-gray-200">
          <ActivityLog />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;