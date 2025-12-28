
import { Navigate, Outlet } from 'react-router-dom';

const Admin_routes = () => {
   
    const isAdmin=true
  return isAdmin ? <Outlet /> : <Navigate to="/login" replace />;
}

export default Admin_routes;