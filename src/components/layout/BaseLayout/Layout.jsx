import { Outlet } from "react-router-dom";
import { Sidebar } from "@/modules/Sidebar";

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
