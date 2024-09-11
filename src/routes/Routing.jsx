import AdminLayout from "@/components/layout/BaseLayout/AdminLayout";
import Layout from "@/components/layout/BaseLayout/Layout";
import { ADMIN_ROUTER } from "@/modules/admin";
import { USER_ROUTES } from "@/modules/User";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const SignUp = lazy(() => import("../pages/RegistrationPage/SignUp/SignUp"));
const SignIn = lazy(() => import("../pages/RegistrationPage/SignIn/SignIn"));
const Forgot = lazy(
	() => import("../pages/RegistrationPage/Forgot/ForgotPassword")
);

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
