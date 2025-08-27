import { Route } from "react-router-dom";
import App from "../App";
import UserLayout from "../layouts/user_layout/Layout";
import AdminLayout from "../layouts/admin_layout/Layout";

export const appRoute = (
  <>
    <Route path="/" element={<App />}>
      {/* //user route  */}
      <Route element={<UserLayout />}>
        <Route path="/" lazy={() => import("../pages/Home")} />
      </Route>

      <Route element={<AdminLayout />}>
        
        <Route path="/dashboard" lazy={() => import("../pages/Dashboard")} />
      </Route>
      {/* //admin route  */}
    </Route>
  </>
);