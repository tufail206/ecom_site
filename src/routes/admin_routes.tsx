import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';

const Admin_routes = () => {
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);

  // Assuming admin role is 'admin'
  const isAdmin = isAuthenticated && user?.role === 'admin';

  return isAdmin ? <Outlet /> : <Navigate to="/" replace />;
}

export default Admin_routes;