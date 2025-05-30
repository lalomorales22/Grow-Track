import React, { useState } from 'react';
import { FileText, Send, CheckSquare, Download, AlertTriangle } from 'lucide-react';

interface DataCategory {
  id: string;
  name: string;
  description: string;
  recordCount: number;
  lastSync: string;
  selected: boolean;
}

const CDCCReporting: React.FC = () => {
  const [dataCategories, setDataCategories] = useState<DataCategory[]>([
    {
      id: 'plants',
      name: 'Plant Data',
      description: 'All plant tracking data including growth phases, locations, and events',
      recordCount: 1250,
      lastSync: '2024-03-01',
      selected: true,
    },
    {
      id: 'packages',
      name: 'Package Data',
      description: 'Package information including contents, weights, and testing results',
      recordCount: 450,
      lastSync: '2024-03-01',
      selected: true,
    },
    {
      id: 'transfers',
      name: 'Transfer Manifests',
      description: 'Transportation and chain of custody records',
      recordCount: 75,
      lastSync: '2024-03-01',
      selected: true,
    },
    {
      id: 'inventory',
      name: 'Inventory Records',
      description: 'Current inventory levels and adjustment history',
      recordCount: 850,
      lastSync: '2024-03-01',
      selected: true,
    },
    {
      id: 'lab_results',
      name: 'Laboratory Results',
      description: 'Testing data and certificates of analysis',
      recordCount: 200,
      lastSync: '2024-03-01',
      selected: true,
    },
  ]);

  const [isGenerating, setIsGenerating] = useState(false);

  const handleToggleCategory = (id: string) => {
    setDataCategories(categories =>
      categories.map(category =>
        category.id === id ? { ...category, selected: !category.selected } : category
      )
    );
  };

  const handleSelectAll = () => {
    setDataCategories(categories =>
      categories.map(category => ({ ...category, selected: true }))
    );
  };

  const handleDeselectAll = () => {
    setDataCategories(categories =>
      categories.map(category => ({ ...category, selected: false }))
    );
  };

  const handleGenerateAndSend = async () => {
    setIsGenerating(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsGenerating(false);
  };

  const selectedCount = dataCategories.filter(c => c.selected).length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">CDCC Reporting</h1>
          <p className="mt-1 text-sm text-gray-500">
            Generate and submit compliance reports to the California Department of Cannabis Control
          </p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleGenerateAndSend}
            disabled={selectedCount === 0 || isGenerating}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Generating...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" /> Generate & Send
              </>
            )}
          </button>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Data Selection
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Select the data categories to include in your report
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleSelectAll}
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Select All
              </button>
              <button
                onClick={handleDeselectAll}
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Deselect All
              </button>
            </div>
          </div>
        </div>

        <div className="px-4 py-5 sm:p-6">
          <div className="space-y-4">
            {dataCategories.map((category) => (
              <div
                key={category.id}
                className={`border rounded-lg p-4 ${
                  category.selected ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
                }`}
              >
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      checked={category.selected}
                      onChange={() => handleToggleCategory(category.id)}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex items-center justify-between">
                      <label htmlFor={category.id} className="font-medium text-gray-900">
                        {category.name}
                      </label>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {category.recordCount.toLocaleString()} records
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{category.description}</p>
                    <div className="mt-1 text-xs text-gray-400">
                      Last synced: {category.lastSync}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 px-4 py-5 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-500">
                {selectedCount} categories selected
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
                <Download className="mr-1 h-4 w-4" />
                Download Last Report
              </button>
              <button className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
                <AlertTriangle className="mr-1 h-4 w-4" />
                View Validation Issues
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CDCCReporting;