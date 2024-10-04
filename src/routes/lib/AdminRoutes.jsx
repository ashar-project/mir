import { lazy } from 'react';
import { AdminPaymentPage } from '@/pages/Admin/AdminPaymentPage/AdminPaymentPage';
import { AdminGaveUpPage, AdminGraduatedPage, AdminInnerReceivePage, AdminReceivedPage, TotalAmout } from '@/pages/Admin';

const WorldPage = lazy(() => import('@/pages/WorldPage'));
const RatingPage = lazy(() => import('@/pages/RatingPage'));

export const ADMIN_ROUTER = [
  {
    index: true,
    element: <TotalAmout />,
  },

  {
    path: 'worlds-page',
    children: [
      {
        index: true,
        element: <WorldPage />,
      },

      {
        path: ':id',
        element: <RatingPage />,
      },
    ],
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
      },
    ],
  },

  {
    path: 'graduated-page',
    element: <AdminGraduatedPage />,
  },

  {
    path: 'gave-page',
    element: <AdminGaveUpPage />,
  },

  {
    path: 'payment-page',
    element: <AdminPaymentPage />,
  },
];
