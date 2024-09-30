import {
  AdminGaveUpPage,
  AdminGraduatedPage,
  AdminReceivedPage,
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
    element: <AdminReceivedPage />,
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
