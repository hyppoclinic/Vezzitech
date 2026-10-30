import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import { AdminRoute } from './components/admin/AdminRoute.tsx';
import { DashboardLayout } from './components/admin/DashboardLayout.tsx';
import './index.css';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { 
    path: "/admin/*", 
    element: (
      <AdminRoute>
        <DashboardLayout>
          <div>CMS Dashboard</div>
        </DashboardLayout>
      </AdminRoute>
    ) 
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
