import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <>
      <aside>
        <h1>admin layout</h1>
      </aside>
      <main>
        <Outlet />
      </main>
    </>
  );
};
