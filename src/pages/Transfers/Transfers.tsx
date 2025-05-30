import React, { useState } from 'react';
import { TruckIcon, Plus, Search, Filter, ArrowRight, ArrowLeft, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import FilterPanel from '../../components/shared/FilterPanel';

const Transfers: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const transfers = [
    {
      id: 'TRF001',
      type: 'Outbound',
      status: 'Completed',
      origin: 'Main Facility',
      destination: 'Retail Store A',
      items: '5 packages',
      date: '2024-03-01',
      estimatedArrival: '2024-03-02',
    },
    {
      id: 'TRF002',
      type: 'Inbound',
      status: 'In Transit',
      origin: 'Supplier B',
      destination: 'Main Facility',
      items: '3 packages',
      date: '2024-03-01',
      estimatedArrival: '2024-03-03',
    },
    {
      id: 'TRF003',
      type: 'Outbound',
      status: 'Pending',
      origin: 'Main Facility',
      destination: 'Distribution Center',
      items: '8 packages',
      date: '2024-03-02',
      estimatedArrival: '2024-03-04',
    },
    {
      id: 'TRF004',
      type: 'Inbound',
      status: 'Completed',
      origin: 'Supplier A',
      destination: 'Main Facility',
      items: '2 packages',
      date: '2024-02-28',
      estimatedArrival: '2024-03-01',
    },
    {
      id: 'TRF005',
      type: 'Outbound',
      status: 'Rejected',
      origin: 'Main Facility',
      destination: 'Retail Store B',
      items: '4 packages',
      date: '2024-02-28',
      estimatedArrival: '2024-03-01',
    },
  ];

  const filterOptions = [
    {
      id: 'type',
      label: 'Transfer Type',
      options: ['Inbound', 'Outbound'],
    },
    {
      id: 'status',
      label: 'Status',
      options: ['Pending', 'In Transit', 'Completed', 'Rejected'],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="h-5 w-5 text-success-500" />;
      case 'In Transit':
        return <Clock className="h-5 w-5 text-warning-500" />;
      case 'Rejected':
        return <AlertTriangle className="h-5 w-5 text-error-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-success-100 text-success-800';
      case 'In Transit':
        return 'bg-warning-100 text-warning-800';
      case 'Rejected':
        return 'bg-error-100 text-error-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Transfers</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700">
          <Plus className="mr-2 h-5 w-5" /> Create Transfer
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
                placeholder="Search transfers..."
              />
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
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
                  Transfer ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Origin
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Destination
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Items
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transfers.map((transfer) => (
                <tr key={transfer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center">
                      <TruckIcon className="h-5 w-5 text-primary-500 mr-2" />
                      {transfer.id}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      {transfer.type === 'Inbound' ? (
                        <ArrowLeft className="h-4 w-4 text-success-500 mr-1" />
                      ) : (
                        <ArrowRight className="h-4 w-4 text-primary-500 mr-1" />
                      )}
                      {transfer.type}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(transfer.status)}`}>
                      {getStatusIcon(transfer.status)}
                      <span className="ml-1">{transfer.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transfer.origin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transfer.destination}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transfer.items}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transfer.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900">
                      View Details
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
                <span className="font-medium">12</span> transfers
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

      <FilterPanel
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filterOptions}
        onApplyFilters={(filters) => {
          console.log('Applied filters:', filters);
          setIsFilterOpen(false);
        }}
      />
    </div>
  );
};

export default Transfers;