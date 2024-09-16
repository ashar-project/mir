import GaveUp from '@/pages/GaveUpPage/GaveUp';
import { lazy } from 'react';
import { UserProfile } from '@/pages/UserPage/UserProfile/UserProfile';
const WorldPage = lazy(() => import('@/pages/WorldPage'));
const GraduatedPage = lazy(() => import('@/pages/GraduatedPage'));

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
        path: 'received-profile/:id',
        element: <UserProfile />,
      },
    ],
  },
  {
    path: '/graduated',
    element: <GraduatedPage />,
  },
  {
    path: '/gave-up',
    element: <GaveUp />,
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
    element: <h1>Tech support</h1>,
  },
];
