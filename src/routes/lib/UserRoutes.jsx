import { UserEditPage, UserProfilePage } from '@/pages/UserPage';
import { Suspense, lazy } from 'react';

const UserProfile = lazy(() => import('@/pages/UserPage'));
const WorldPage = lazy(() => import('@/pages/WorldPage'));
const Support = lazy(() => import('@/pages/SupportPage'));
const GraduatedPage = lazy(() => import('@/pages/GraduatedPage'));
const GaveUpPage = lazy(() => import('@/pages/GaveUpPage'));

export const SitePaths = {
  world: '/',
  received: '/received',
  graduated: '/graduated', 
  gaveUp: '/gave-up',
  pay: '/pay',
  about: '/about',
  techSupport: '/tech-support',
};

export const USER_ROUTES = [
  {
    index: true,
    element: <WorldPage />,
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
        element: <UserProfile />,
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
    element: <GaveUpPage/>,
  },
  {
    path: SitePaths.pay,
    element: <h1>Pay</h1>,
  },
  {
    path: SitePaths.about,
    element: <h1>About Us</h1>,
  },
  {
    path: SitePaths.techSupport,
    element: <Support />,
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
