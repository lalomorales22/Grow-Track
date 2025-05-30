import React from 'react';
import { AlertCircle, AlertTriangle, Info } from 'lucide-react';

type Issue = {
  id: number;
  severity: 'high' | 'medium' | 'low';
  message: string;
  area: string;
};

type AlertsPanelProps = {
  issues: Issue[];
};

const AlertsPanel: React.FC<AlertsPanelProps> = ({ issues }) => {
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high':
        return <AlertCircle className="h-5 w-5 text-error-500" />;
      case 'medium':
        return <AlertTriangle className="h-5 w-5 text-warning-500" />;
      case 'low':
        return <Info className="h-5 w-5 text-info-500" />;
      default:
        return <Info className="h-5 w-5 text-info-500" />;
    }
  };

  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-error-50 text-error-800 border-error-300';
      case 'medium':
        return 'bg-warning-50 text-warning-800 border-warning-300';
      case 'low':
        return 'bg-blue-50 text-blue-800 border-blue-300';
      default:
        return 'bg-blue-50 text-blue-800 border-blue-300';
    }
  };

  return (
    <div className="flow-root">
      <ul role="list" className="divide-y divide-gray-200">
        {issues.length > 0 ? (
          issues.map((issue) => (
            <li key={issue.id} className="px-4 py-4 sm:px-6">
              <div className={`p-4 rounded-md border ${getSeverityClass(issue.severity)}`}>
                <div className="flex">
                  <div className="flex-shrink-0">
                    {getSeverityIcon(issue.severity)}
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">
                      {issue.message}
                    </h3>
                    <div className="mt-2 text-sm">
                      <p>Area: {issue.area}</p>
                    </div>
                    <div className="mt-4">
                      <div className="-mx-2 -my-1.5 flex">
                        <button
                          type="button"
                          className="px-2 py-1.5 rounded-md text-sm font-medium bg-white text-primary-700 hover:bg-primary-50"
                        >
                          View Details
                        </button>
                        <button
                          type="button"
                          className="ml-3 px-2 py-1.5 rounded-md text-sm font-medium bg-white text-primary-700 hover:bg-primary-50"
                        >
                          Resolve
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))
        ) : (
          <li className="px-4 py-12 text-center">
            <Info className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No compliance issues</h3>
            <p className="mt-1 text-sm text-gray-500">Your facility is currently in compliance with all regulations.</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default AlertsPanel;