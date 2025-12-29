import { Navigate, Outlet } from "react-router-dom";

const GuestRoute = () => {
//   const isLogin = Boolean(localStorage.getItem("token"));
  const isLogin = true;

  // If already logged in → go to home
  return isLogin ? <Navigate to="/" replace /> : <Outlet />;
};

export default GuestRoute;
