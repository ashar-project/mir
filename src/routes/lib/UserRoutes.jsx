import GaveUp from "@/pages/GaveUpPage/GaveUp";
import { lazy } from "react";

const WorldPage = lazy(() => import("@/pages/WorldPage"));
const GraduatedPage = lazy(() => import("@/pages/GraduatedPage"));

export const USER_ROUTES = [
  {
    index: true,
    element: <WorldPage />,
  },
  {
    path: "/received",
    element: <h1>Received</h1>,
  },
  {
    path: "/graduated",
    element: <GraduatedPage />,
  },
  {
    path: "/gave-up",
    element: <GaveUp/>,
  },
  {
    path: "/pay",
    element: <h1>Pay</h1>,
  },
  {
    path: "/about",
    element: <h1>About Us</h1>,
  },
  {
    path: "/tech-support",
    element: <h1>Tech support</h1>,
  },
];
