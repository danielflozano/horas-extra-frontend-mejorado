import { createBrowserRouter, Navigate } from 'react-router-dom';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { PublicRoutes } from './PublicRoutes';
import { ProtectedRoutes } from './ProtectedRoutes';
import { LoginPage, RecoverPasswordPage, ResetPasswordPage, VerifyCodePage } from '@/features/auth';
import { HomePage } from '@/features/home';
import { OvertimesPage } from '@/features/overtimes';
import { WorkersPage } from '@/features/workers';
import { ReportsPage } from '@/features/reports';
import listRoutes from './list';

export const AppRouter = createBrowserRouter([
  {
    element: <PublicRoutes />,
    children: [
      { path: listRoutes.auth.login, element: <LoginPage /> },
      { path: listRoutes.auth.initiate, element: <RecoverPasswordPage /> },
      { path: listRoutes.auth.code, element: <VerifyCodePage /> },
      { path: listRoutes.auth.reset, element: <ResetPasswordPage /> },
    ],
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: listRoutes.dashboard.home,
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: listRoutes.dashboard.overtimes,
            element: <OvertimesPage />,
          },
          {
            path: listRoutes.dashboard.workers,
            element: <WorkersPage />,
          },
          {
            path: listRoutes.dashboard.reports,
            element: <ReportsPage />,
          },
        ],
      },
    ],
  },
  { path: '*', element: <Navigate to={listRoutes.auth.login} /> },
]);