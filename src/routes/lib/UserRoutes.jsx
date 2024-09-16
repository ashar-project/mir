import GaveUp from "@/pages/GaveUpPage/GaveUp";
import GraduatedPage from "@/pages/GraduatedPage";
import WorldPage from "@/pages/WorldPage";

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
    element: <GaveUp />,
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
