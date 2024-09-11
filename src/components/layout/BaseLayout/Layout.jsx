import Sidebar from "@/components/Sidebar/SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
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

export default Layout;
