import { lazy } from "react";

const WorldPage = lazy(() => import("@/pages/WorldPage"));
const GraduatedPage = lazy(() => import("@/pages/GraduatedPage"));

export const SitePaths = {
  world: "/",
  received: "/received",
  graduated: "/graduated",
  gaveUp: "/gave-up",
  pay: "/pay",
  about: "/about",
  techSupport: "/tech-support",
};

export const USER_ROUTES = [
  {
    index: true,
    element: <WorldPage />,
  },
  {
    path: SitePaths.received,
    element: <h1>Received</h1>,
  },
  {
    path: SitePaths.graduated,
    element: <GraduatedPage />,
  },
  {
    path: SitePaths.gaveUp,
    element: <h1>Gave up</h1>,
  },
  {
    path: SitePaths.pay,
    element: <h1>Pay</h1>,
  },
  {
    path: SitePaths.about,
    element: <h1>About Us</h1>,
  },
  {
    path: SitePaths.techSupport,
    element: <h1>Tech support</h1>,
  },
];
