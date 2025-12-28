import { Route } from "react-router-dom";
import App from "../App";
import UserLayout from "../layouts/user_layout/Layout";
import AdminLayout from "../layouts/admin_layout/Layout";
import Admin_routes from "./admin_routes";
import { appPath } from "../utils/pathConstant";
import ErrorBoundary from "../components/ErrorBoundary";

export const appRoute = (
  <>
    <Route path={appPath.ROOT} element={<App />} ErrorBoundary={ErrorBoundary}  errorElement={<h2>something went wrong</h2> }>
      {/* //user route  */}

      <Route path={appPath.LOGIN} lazy={() => import("../pages/auth/login")} />
   
      <Route element={<UserLayout />}>
        <Route path={appPath.HOME} lazy={() => import("../pages/users/Home")} />
      </Route>

      <Route element={<Admin_routes />}>
        <Route element={<AdminLayout />} errorElement={<h2>admin dashboard error</h2>} ErrorBoundary={ErrorBoundary}>
          <Route path={appPath.ADMIN_DASHBOARD} lazy={() => import("../pages/admin/dashboard")} />
          <Route path={appPath.ADMIN_PRODUCTS} lazy={() => import("../pages/admin/products")} />
          <Route path={appPath.ADMIN_USERS} lazy={() => import("../pages/admin/user")} />
        </Route>
        {/* //admin route  */}
      </Route>
    </Route>
  </>
);