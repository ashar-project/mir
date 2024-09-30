import { lazy } from 'react';

import { TotalAmout } from '@/pages/Admin';

const WorldPage = lazy(() => import('@/pages/WorldPage'));
const RatingPage = lazy(() => import('@/pages/RatingPage'));

export const ADMIN_ROUTER = [
  {
    index: true,
    element: <TotalAmout />,
  },
  {
    path: 'worlds-page',
    element: <WorldPage />,
  },
  {
    path: 'worlds-page/:id',
    element: <RatingPage />,
  },
  {
    path: 'received-page',
    element: <h1>Received Page</h1>,
  },
  {
    element: <h1>Graduated Page</h1>,
    path: 'graduated-page',
  },
  {
    path: 'gave-page',
    element: <h1>Gave Up Page</h1>,
  },
];
