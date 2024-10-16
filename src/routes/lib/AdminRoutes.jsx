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
import { AdminReturnPay } from '@/pages/Admin/AdminReturnPay/AdminReturnPay';
import { Suspense } from 'react';
import { Spinner } from '@/components/Spinner/Spinner';

export const ADMIN_ROUTER = [
  {
    path:'/admin',
    element: (
      <Suspense fallback={<Spinner />}>
        <TotalAmout />
      </Suspense>
    ),
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
        path: ':userId/adminInnerTablePage',
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
  {
    path: 'return-pay',
    element: <AdminReturnPay />,
  },
];

// import { lazy, Suspense } from 'react';
// import { Spinner } from '@/components/Spinner/Spinner';

// const AdminPaymentPage = lazy(
//   () => import('@/pages/Admin/AdminPaymentPage/AdminPaymentPage')
// );
// const AdminGaveUpPage = lazy(() => import('@/pages/Admin'));
// const AdminGraduatedPage = lazy(() => import('@/pages/Admin'));
// const AdminInnerReceivePage = lazy(() => import('@/pages/Admin'));
// const AdminReceivedPage = lazy(() => import('@/pages/Admin'));
// const AdminWorldPage = lazy(() => import('@/pages/Admin'));
// const RatingPage = lazy(() => import('@/pages/RatingPage'));
// const AdminInnerTablePage = lazy(() => import('@/pages/Admin/AdminWorldPage'));
// const AdminReturnPay = lazy(
//   () => import('@/pages/Admin/AdminReturnPay/AdminReturnPay')
// );
// const TotalAmount = lazy(() => import('@/pages/Admin'));

// export const ADMIN_ROUTER = [
//   {
//     index: true,
//     element: (
//       <Suspense fallback={<Spinner />}>
//         <TotalAmount />
//       </Suspense>
//     ),
//   },
//   {
//     path: 'worlds-page',
//     children: [
//       {
//         index: true,
//         element: (
//           <Suspense fallback={<Spinner />}>
//             <AdminWorldPage />
//           </Suspense>
//         ),
//       },
//       {
//         path: ':id/worldRaiting',
//         element: (
//           <Suspense fallback={<Spinner />}>
//             <RatingPage />
//           </Suspense>
//         ),
//       },
//       {
//         path: ':userId/adminInnerTablePage',
//         element: (
//           <Suspense fallback={<Spinner />}>
//             <AdminInnerTablePage />
//           </Suspense>
//         ),
//       },
//     ],
//   },
//   {
//     path: 'received-page',
//     children: [
//       {
//         index: true,
//         element: (
//           <Suspense fallback={<Spinner />}>
//             <AdminReceivedPage />
//           </Suspense>
//         ),
//       },
//       {
//         path: ':id/received-inner-page',
//         element: (
//           <Suspense fallback={<Spinner />}>
//             <AdminInnerReceivePage />
//           </Suspense>
//         ),
//       },
//     ],
//   },
//   {
//     path: 'graduated-page',
//     element: (
//       <Suspense fallback={<Spinner />}>
//         <AdminGraduatedPage />
//       </Suspense>
//     ),
//   },
//   {
//     path: 'gave-page',
//     element: (
//       <Suspense fallback={<Spinner />}>
//         <AdminGaveUpPage />
//       </Suspense>
//     ),
//   },
//   {
//     path: 'payment-page',
//     element: (
//       <Suspense fallback={<Spinner />}>
//         <AdminPaymentPage />
//       </Suspense>
//     ),
//   },
//   {
//     path: 'return-pay',
//     element: (
//       <Suspense fallback={<Spinner />}>
//         <AdminReturnPay />
//       </Suspense>
//     ),
//   },
// ];
