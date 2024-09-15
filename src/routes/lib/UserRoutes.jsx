import GaveUp from "@/pages/GaveUpPage/GaveUp";
import GraduatedPage from "@/pages/GraduatedPage";
import WorldPage from "@/pages/WorldPage";
import { Suspense } from "react";

export const USER_ROUTES = [
	{
		index: true,
		element: (
			<Suspense fallback={<h1>Loading ...</h1>}>
				<WorldPage />
			</Suspense>
		),
	},
	{
		path: "/received",
		element: <h1>Received</h1>,
	},
	{
		path: "/graduated",
		element: (
			<Suspense fallback={<h1>Loading ...</h1>}>
				<GraduatedPage />,
			</Suspense>
		),
	},
	{
		path: "/gave-up",
		element: (
			<Suspense fallback={<h1>Loading ...</h1>}>
				<GaveUp />
			</Suspense>
		),
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
