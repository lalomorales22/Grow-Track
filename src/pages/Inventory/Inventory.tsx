import React, { useState } from 'react';
import { Package, Leaf, Filter, Search, ArrowUpDown, Plus } from 'lucide-react';
import AddInventoryModal from '../../components/Inventory/AddInventoryModal';
import AdjustInventoryModal from '../../components/Inventory/AdjustInventoryModal';
import FilterPanel from '../../components/shared/FilterPanel';

const Inventory: React.FC = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isAdjustModalOpen, setIsAdjustModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const inventory = [
    { id: 'INV001', type: 'Flower', strain: 'Blue Dream', quantity: '500g', location: 'Vault A', lastUpdated: '2024-03-01' },
    { id: 'INV002', type: 'Extract', strain: 'OG Kush', quantity: '100g', location: 'Vault B', lastUpdated: '2024-02-28' },
    { id: 'INV003', type: 'Plants', strain: 'Sour Diesel', quantity: '25 plants', location: 'Room A-3', lastUpdated: '2024-02-27' },
    { id: 'INV004', type: 'Edibles', strain: 'Various', quantity: '200 units', location: 'Storage C', lastUpdated: '2024-02-26' },
    { id: 'INV005', type: 'Flower', strain: 'Purple Haze', quantity: '750g', location: 'Vault A', lastUpdated: '2024-02-25' },
  ];

  const filterOptions = [
    {
      id: 'type',
      label: 'Product Type',
      options: ['Flower', 'Extract', 'Plants', 'Edibles'],
    },
    {
      id: 'location',
      label: 'Location',
      options: ['Vault A', 'Vault B', 'Room A-3', 'Storage C'],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Inventory</h1>
        <div className="flex space-x-3">
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
          >
            <Plus className="mr-2 h-5 w-5" /> Add Inventory
          </button>
          <button
            onClick={() => setIsAdjustModalOpen(true)}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <ArrowUpDown className="mr-2 h-5 w-5" /> Adjust Inventory
          </button>
        </div>
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
                placeholder="Search inventory..."
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
                  ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Strain
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {inventory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center">
                      {item.type === 'Plants' ? (
                        <Leaf className="h-5 w-5 text-primary-500 mr-2" />
                      ) : (
                        <Package className="h-5 w-5 text-secondary-500 mr-2" />
                      )}
                      {item.id}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.strain}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.lastUpdated}
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
                <span className="font-medium">20</span> items
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

      <AddInventoryModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      <AdjustInventoryModal isOpen={isAdjustModalOpen} onClose={() => setIsAdjustModalOpen(false)} />
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

export default Inventory;