import { Outlet } from "react-router-dom";

const AdminLayout = () => {
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

export default AdminLayout;
