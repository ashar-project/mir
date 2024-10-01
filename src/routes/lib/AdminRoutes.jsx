import {
  AdminGaveUpPage,
  AdminGraduatedPage,
  AdminReceivedPage,
  AdminInnerReceivePage,
  TotalAmout,
} from '@/pages/Admin';

export const ADMIN_ROUTER = [
  {
    index: true,
    element: <TotalAmout />,
  },
  {
    path: 'worlds-page',
    element: <h1>World Page</h1>,
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
    element: <AdminGraduatedPage />,
    path: 'graduated-page',
  },
  {
    path: 'gave-page',
    element: <AdminGaveUpPage />,
  },
];
