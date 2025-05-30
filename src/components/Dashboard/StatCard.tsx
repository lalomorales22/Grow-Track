import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

type StatCardProps = {
  stat: {
    id: number;
    name: string;
    value: string;
    change: string;
    icon: LucideIcon;
    color: string;
  };
};

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className={`flex-shrink-0 ${stat.color} rounded-md p-3`}>
            <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
            <dd className="flex items-baseline">
              <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
              {stat.change.startsWith('+') && (
                <div className="ml-2 flex items-baseline text-sm font-semibold text-success-600">
                  <span>{stat.change}</span>
                </div>
              )}
              {stat.change.startsWith('-') && !isNaN(parseFloat(stat.change)) && (
                <div className="ml-2 flex items-baseline text-sm font-semibold text-error-600">
                  <span>{stat.change}</span>
                </div>
              )}
            </dd>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;