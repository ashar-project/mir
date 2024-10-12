import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRouter = ({ isAuth, fallbackPath, children, roles }) => {
  const { role } = useSelector(state => state.auth);

  const isAllowed = roles.includes(role);
  
  if (isAuth && isAllowed) {
    return children;
  }

  return <Navigate to={fallbackPath} replace />;
};

export default ProtectedRouter;
