import React, { useState } from 'react';
import { Bell, X, CheckCircle, AlertTriangle, InfoIcon } from 'lucide-react';

type Notification = {
  id: string;
  type: 'success' | 'warning' | 'info';
  title: string;
  message: string;
  time: string;
  read: boolean;
};

const NotificationsDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'warning',
      title: 'Inventory Alert',
      message: 'Low inventory detected for Blue Dream strain',
      time: '5 minutes ago',
      read: false,
    },
    {
      id: '2',
      type: 'success',
      title: 'Transfer Complete',
      message: 'Transfer #TRF-123 has been successfully completed',
      time: '1 hour ago',
      read: false,
    },
    {
      id: '3',
      type: 'info',
      title: 'System Update',
      message: 'New features will be deployed tonight at 12 AM',
      time: '2 hours ago',
      read: true,
    },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-success-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-warning-500" />;
      case 'info':
        return <InfoIcon className="h-5 w-5 text-info-500" />;
      default:
        return null;
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const removeNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      >
        <span className="sr-only">View notifications</span>
        <Bell className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-error-500 ring-2 ring-white" />
        )}
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Notifications</h3>
              <button className="text-sm text-primary-600 hover:text-primary-800">
                Mark all as read
              </button>
            </div>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex items-start space-x-4 p-3 rounded-lg ${
                    notification.read ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex-shrink-0">
                    {getIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {notification.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {notification.time}
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex space-x-2">
                    {!notification.read && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="text-sm text-primary-600 hover:text-primary-800"
                      >
                        Mark as read
                      </button>
                    )}
                    <button
                      onClick={() => removeNotification(notification.id)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {notifications.length === 0 && (
              <p className="text-center text-gray-500 py-4">
                No notifications
              </p>
            )}
          </div>
          <div className="p-4">
            <button className="text-sm text-gray-500 hover:text-gray-700 w-full text-center">
              View all notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationsDropdown;