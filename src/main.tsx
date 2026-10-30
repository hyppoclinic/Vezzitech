import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import { AdminRoute } from './components/admin/AdminRoute.tsx';
import { Dashboard } from './components/Dashboard.tsx';
import { LoginForm } from './components/admin/LoginForm.tsx';
import './index.css';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <App /> 
  },
  { 
    path: '/admin', 
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ) 
  },
  { 
    path: '/admin/*', 
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ) 
  },
  { 
    path: '/dashboard', 
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ) 
  },
  { 
    path: '/dashboard/*', 
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ) 
  },
  { 
    path: '/login', 
    element: <LoginForm /> 
  },
  { 
    path: '*', 
    element: <App /> 
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
