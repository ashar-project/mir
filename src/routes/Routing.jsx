import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AdminLayout, Layout } from '@/components';
import { Spinner } from '@/components/Spinner/Spinner';
import SignUp from '@/pages/RegistrationPage/SignUp';
import SignIn from '@/pages/RegistrationPage/SignIn';
import Forgot from '@/pages/RegistrationPage/Forgot';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { useSelector } from 'react-redux';
import { USER_ROUTES } from './lib/UserRoutes';
import { ADMIN_ROUTER } from './lib/AdminRoutes';
import { ResetPassword } from '@/pages/RegistrationPage/ResetPassword/ResetPassword';
import { Roles } from './lib/rout';
import { ProtectedRouter } from './lib/ProtectedRouter';

export const Routing = () => {
  const { isAuth, role } = useSelector(state => state.auth);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRouter
          isAuth={isAuth}
          roles={[Roles.USER]}
          fallbackPath={'/admin'}
        >
          <Suspense fallback={<Spinner />}>
            <Layout />
          </Suspense>
        </ProtectedRouter>
      ),
      children: USER_ROUTES,
    },
    {
      path: '/admin',
      element: (
        <ProtectedRouter
          isAuth={isAuth}
          roles={[Roles.ADMIN]}
          fallbackPath={'/sign-in'}
        >
          <Suspense fallback={<Spinner />}>
            <AdminLayout />
          </Suspense>
        </ProtectedRouter>
      ),
      children: ADMIN_ROUTER,
    },
    {
      path: '/sign-up',
      element: (
        <Suspense fallback={<Spinner />}>
          <SignUp />
        </Suspense>
      ),
    },
    {
      path: '/sign-in',
      element: (
        <ProtectedRouter
          isAuth={!isAuth}
          roles={[Roles.GUEST]}
          fallbackPath={'/'}
        >
          <Suspense fallback={<Spinner />}>
            <SignIn />
          </Suspense>
        </ProtectedRouter>
      ),
    },
    {
      path: '/forgot',
      element: (
        <ProtectedRouter
          isAuth={!isAuth}
          roles={[Roles.GUEST]}
          fallbackPath={'/'}
        >
          <Suspense fallback={<Spinner />}>
            <Forgot />
          </Suspense>
        </ProtectedRouter>
      ),
    },
    {
      path: 'reset_password/:token',
      element: (
        <ProtectedRouter
          isAuth={!isAuth}
          roles={[Roles.GUEST]}
          fallbackPath={'/'}
        >
          <Suspense fallback={<Spinner />}>
            <ResetPassword />
          </Suspense>
        </ProtectedRouter>
      ),
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);

  // Возвращаем компонент с маршрутизатором
  return <RouterProvider router={router} />;
};
