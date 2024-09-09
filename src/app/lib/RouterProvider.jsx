import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

export const RouterProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </BrowserRouter>
  );
};
