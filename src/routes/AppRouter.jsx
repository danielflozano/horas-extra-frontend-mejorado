import { createBrowserRouter, Navigate } from 'react-router-dom';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import {
  LoginPage,
  RecoverPasswordPage,
  ResetPasswordPage,
  VerifyCodePage,
} from '@/features/auth';
import { OvertimePage } from '@/features/overtime';
import { ProtectedRoutes } from './ProtectedRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = createBrowserRouter([
  {
    element: <PublicRoutes />,
    children: [
      { path: '/login', element: <LoginPage /> },
      { path: '/recover/initiate', element: <RecoverPasswordPage /> },
      { path: '/recover/code', element: <VerifyCodePage /> },
      { path: '/recover/reset', element: <ResetPasswordPage /> },
    ],
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <OvertimePage />,
          },
        ],
      },
    ],
  },
  { path: '*', element: <Navigate to={'/login'} /> },
]);