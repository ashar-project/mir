import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components";

export const Layout = () => {
  return (
    <>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <Outlet />
      </main>
    </>
  );
};
