import { TotalAmout } from '@/pages/Admin';

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
