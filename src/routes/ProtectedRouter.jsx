import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ isAuth, fallbackPath, Component }) => {
	if (isAuth) {
		return Component;
	}
	return <Navigate to={fallbackPath} />;
};

export default ProtectedRouter;
