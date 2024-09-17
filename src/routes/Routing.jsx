import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AdminLayout, Layout } from '@/components';

import { ADMIN_ROUTER } from './lib/AdminRoutes';
import { USER_ROUTES } from './lib/UserRoutes';
import { NotFoundPage } from '@/pages/NotFoundPage';
import SignUp from '@/pages/RegistrationPage/SignUp';
import SignIn from '@/pages/RegistrationPage/SignIn';
import Forgot from '@/pages/RegistrationPage/Forgot';

export const Routing = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense>
          <Layout />
        </Suspense>
      ),
      children: USER_ROUTES,
    },
    {
      path: '/admin',
      element: (
        <Suspense>
          <AdminLayout />
        </Suspense>
      ),
      children: ADMIN_ROUTER,
    },
    {
      path: '/sign-up',
      element: (
        <Suspense>
          <SignUp />
        </Suspense>
      ),
    },
    {
      path: '/sign-in',
      element: (
        <Suspense>
          <SignIn />
        </Suspense>
      ),
    },
    {
      path: '/forgot',
      element: (
        <Suspense>
          <Forgot />
        </Suspense>
      ),
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};
