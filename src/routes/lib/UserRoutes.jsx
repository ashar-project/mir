import { UserEditPage, UserProfilePage } from '@/pages/UserPage';
import { Suspense, lazy } from 'react';

const UserProfile = lazy(() => import('@/pages/UserPage'));
const WorldPage = lazy(() => import('@/pages/WorldPage'));
const Support = lazy(() => import('@/pages/SupportPage'));
const GraduatedPage = lazy(() => import('@/pages/GraduatedPage'));
const GaveUpPage = lazy(() => import('@/pages/GaveUpPage'));

export const USER_ROUTES = [
  {
    index: true,
    element: (
      <Suspense fallback={<h1>Loading ...</h1>}>
        <WorldPage />
      </Suspense>
    ),
  },
  {
    path: '/received',
    children: [
      {
        index: true,
        element: <h1>Received</h1>,
      },
      {
        path: 'received-profile',
        element: (
          <Suspense fallback={<h1>Loading ...</h1>}>
            <UserProfile />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/graduated',
    element: (
      <Suspense fallback={<h1>Loading ...</h1>}>
        <GraduatedPage />,
      </Suspense>
    ),
  },
  {
    path: '/gave-up',
    element: (
      <Suspense fallback={<h1>Loading ...</h1>}>
        <GaveUpPage />
      </Suspense>
    ),
  },
  {
    path: '/pay',
    element: <h1>Pay</h1>,
  },
  {
    path: '/about',
    element: <h1>About Us</h1>,
  },
  {
    path: '/tech-support',
    element: (
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Support />
      </Suspense>
    ),
  },
  {
    path: '/user-profile',
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <UserProfilePage />
          </Suspense>
        ),
      },
      {
        path: 'user-edit-page',
        element: <UserEditPage />,
      },
    ],
  },
];
