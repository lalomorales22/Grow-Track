import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Layout components
import Layout from './components/Layout/Layout';
import Landing from './pages/Landing/Landing';

// Pages
import Dashboard from './pages/Dashboard/Dashboard';
import Plants from './pages/Plants/Plants';
import Packages from './pages/Packages/Packages';
import Transfers from './pages/Transfers/Transfers';
import Settings from './pages/Settings/Settings';
import Login from './pages/Auth/Login';
import Tags from './pages/Tags/Tags';
import Inventory from './pages/Inventory/Inventory';
import ActivityLog from './pages/ActivityLog/ActivityLog';
import Users from './pages/Settings/Users';
import FacilitySettings from './pages/Settings/FacilitySettings';
import NotificationSettings from './pages/Settings/NotificationSettings';
import SecuritySettings from './pages/Settings/SecuritySettings';
import IntegrationSettings from './pages/Settings/IntegrationSettings';
import CDCCReporting from './pages/CDCC/CDCCReporting';

// Context providers
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/activity" element={<ActivityLog />} />
          <Route path="/cdcc" element={<CDCCReporting />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/users" element={<Users />} />
          <Route path="/settings/facility" element={<FacilitySettings />} />
          <Route path="/settings/notifications" element={<NotificationSettings />} />
          <Route path="/settings/security" element={<SecuritySettings />} />
          <Route path="/settings/integrations" element={<IntegrationSettings />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;