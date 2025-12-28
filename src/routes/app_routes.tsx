import { Route } from "react-router-dom";
import App from "../App";
import UserLayout from "../layouts/user_layout/Layout";
import AdminLayout from "../layouts/admin_layout/Layout";
import Admin_routes from "./admin_routes";
import { appPath } from "../utils/pathConstant";

export const appRoute = (
  <>
    <Route path={appPath.ROOT} element={<App />}>
      {/* //user route  */}

      <Route path={appPath.LOGIN} lazy={() => import("../pages/Home")} />
      <Route element={<UserLayout />}>
        <Route path={appPath.HOME} lazy={() => import("../pages/Home")} />
      </Route>

      <Route element={<Admin_routes />}>
        <Route element={<AdminLayout />}>
          <Route path="/dashboard" lazy={() => import("../pages/Dashboard")} />
        </Route>
        {/* //admin route  */}
      </Route>
    </Route>
  </>
);