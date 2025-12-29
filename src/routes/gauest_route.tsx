import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const GuestRoute = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  // If already logged in → go to home
  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
};

export default GuestRoute;
