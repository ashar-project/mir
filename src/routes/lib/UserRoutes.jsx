import GaveUp from '@/pages/GaveUpPage/GaveUp';
import { lazy } from 'react';

const WorldPage = lazy(() => import('@/pages/WorldPage'));
const GraduatedPage = lazy(() => import('@/pages/GraduatedPage'));
const Support = lazy(() => import('@/pages/SupportPage'));

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
        element: <h1>Received Info</h1>,
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
    element: <Support />,
  },
];
