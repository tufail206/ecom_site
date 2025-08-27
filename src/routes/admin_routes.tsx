
import { Navigate, Outlet } from 'react-router-dom';

const Admin_routes = () => {
   
    const isAdmin=false
  return isAdmin ? <Outlet /> : <Navigate to="/login" replace />;
}

export default Admin_routes;