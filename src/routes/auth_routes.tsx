import { Navigate, Outlet } from "react-router-dom";

const Auth_route = () => {
  const isLogin = true;
  return isLogin ? <Outlet /> : <Navigate to="/login" replace />;
};

export default Auth_route
