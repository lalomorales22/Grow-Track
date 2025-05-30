import React from 'react';
import { Leaf, Package, UserPlus, TruckIcon, Edit } from 'lucide-react';
import { format } from 'date-fns';

const activities = [
  {
    id: 1,
    type: 'plant',
    user: 'John Doe',
    action: 'Added 25 new plant clones',
    timestamp: new Date(2023, 5, 15, 10, 30),
    icon: Leaf,
    iconBackground: 'bg-primary-500',
  },
  {
    id: 2,
    type: 'package',
    user: 'Jane Smith',
    action: 'Created Package #PCK-12345 (500g Flower)',
    timestamp: new Date(2023, 5, 15, 9, 15),
    icon: Package,
    iconBackground: 'bg-secondary-500',
  },
  {
    id: 3,
    type: 'user',
    user: 'Admin',
    action: 'Added new user: Mike Johnson (Cultivator)',
    timestamp: new Date(2023, 5, 14, 16, 45),
    icon: UserPlus,
    iconBackground: 'bg-purple-500',
  },
  {
    id: 4,
    type: 'transfer',
    user: 'Sarah Williams',
    action: 'Created transfer manifest #TM-67890 to Retailer XYZ',
    timestamp: new Date(2023, 5, 14, 14, 20),
    icon: TruckIcon,
    iconBackground: 'bg-accent-500',
  },
  {
    id: 5,
    type: 'plant',
    user: 'John Doe',
    action: 'Updated growth phase for 10 plants to Flowering',
    timestamp: new Date(2023, 5, 14, 11, 10),
    icon: Edit,
    iconBackground: 'bg-primary-500',
  },
];

const ActivityLog: React.FC = () => {
  return (
    <div className="flow-root">
      <ul role="list" className="divide-y divide-gray-200">
        {activities.map((activity) => (
          <li key={activity.id} className="px-4 py-4 sm:px-6">
            <div className="flex items-center space-x-4">
              <div className={`${activity.iconBackground} rounded-md p-2`}>
                <activity.icon className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {activity.action}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {activity.user}
                </p>
              </div>
              <div className="flex-shrink-0 text-sm text-gray-500">
                {format(activity.timestamp, 'MMM d, h:mm a')}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;