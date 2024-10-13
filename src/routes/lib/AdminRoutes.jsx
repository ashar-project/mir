import { AdminPaymentPage } from '@/pages/Admin/AdminPaymentPage/AdminPaymentPage';
import {
  AdminGaveUpPage,
  AdminGraduatedPage,
  AdminInnerReceivePage,
  AdminReceivedPage,
  AdminWorldPage,
  TotalAmout,
} from '@/pages/Admin';
import RatingPage from '@/pages/RatingPage';
import { AdminInnerTablePage } from '@/pages/Admin/AdminWorldPage';

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
        element: <AdminWorldPage />,
      },
      {
        path: ':id/worldRaiting',
        element: <RatingPage />,
      },
      {
        path: 'adminInnerTablePage',
        element: <AdminInnerTablePage />,
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
        path: ':id/received-inner-page',
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
