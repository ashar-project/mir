import GaveUpPage from '@/pages/GaveUpPage';
import GraduatedPage from '@/pages/GraduatedPage';
import { ReceivedPage } from '@/pages/ReceivedPage';
import Support from '@/pages/SupportPage';
import { InnerUserPage, UserEditPage, UserProfilePage } from '@/pages/UserPage';
import WorldPage, { WorldInfo } from '@/pages/WorldPage';
import { Suspense, lazy } from 'react';

// const WorldPage = lazy(() => import('@/pages/WorldPage'));
// const Support = lazy(() => import('@/pages/SupportPage'));
// const GraduatedPage = lazy(() => import('@/pages/GraduatedPage'));
// const GaveUpPage = lazy(() => import('@/pages/GaveUpPage'));

export const SitePaths = {
  world: '/',
  received: '/received',
  graduated: '/graduated',
  gaveUp: '/gave-up',
  pay: '/pay',
  about: '/about',
  techSupport: '/tech-support',
  admin: '/admin',
  adminReceived: '/admin/received-page',
  adminGraduated: '/admin/graduated-page',
  adminGaveUp: '/admin/gave-page',
  userProfilePage: '/user-profile',
};

export const USER_ROUTES = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <WorldPage />,
      },
      {
        path: ':id/worldInfo',
        element: <WorldInfo />,
      },
    ],
  },
  {
    path: SitePaths.received,
    children: [
      {
        index: true,
        element: <ReceivedPage />,
      },
      {
        path: ':id/received-profile',
        element: <InnerUserPage />,
      },
    ],
  },
  ,
  {
    path: SitePaths.graduated,
    element: <GraduatedPage />,
  },
  {
    path: SitePaths.gaveUp,
    element: <GaveUpPage />,
  },
  {
    path: SitePaths.techSupport,
    element: <Support />,
  },
  {
    path: SitePaths.userProfilePage,
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
