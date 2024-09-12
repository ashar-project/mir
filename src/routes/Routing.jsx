import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AdminLayout, Layout } from "@/components";

import { ADMIN_ROUTER } from "./lib/AdminRoutes";
import { USER_ROUTES } from "./lib/UserRoutes";

const SignUp = lazy(() => import("@/pages/RegistrationPage/SignUp"));
const SignIn = lazy(() => import("@/pages/RegistrationPage//SignIn"));
const Forgot = lazy(() => import("@/pages/RegistrationPage/Forgot"));

export const Routing = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: USER_ROUTES,
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: ADMIN_ROUTER,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/forgot",
      element: <Forgot />,
    },
  ]);

  return <RouterProvider router={router} />;
};
