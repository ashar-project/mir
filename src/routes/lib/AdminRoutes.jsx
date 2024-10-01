import { lazy } from 'react';

import {
  AdminGaveUpPage,
  AdminGraduatedPage,
  AdminReceivedPage,
  AdminInnerReceivePage,
  TotalAmout,
} from '@/pages/Admin';

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
    children: [
      {
        index: true,
        element: <AdminReceivedPage />,
      },
      {
        path: 'received-inner-page',
        element: <AdminInnerReceivePage />,
        // element: <>asdsdas</>,
      },
    ],
  },
  {
    element: <AdminGraduatedPage />,
    path: 'graduated-page',
  },
  {
    path: 'gave-page',
    element: <AdminGaveUpPage />,
  },
];
