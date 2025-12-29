import { Route } from "react-router-dom";
import App from "../App";
import UserLayout from "../layouts/user_layout/Layout";
import AdminLayout from "../layouts/admin_layout/Layout";
import Admin_routes from "./admin_routes";
import { appPath } from "../utils/pathConstant";
import ErrorBoundary from "../components/ErrorBoundary";
import Auth_route from "./auth_routes";
import GuestRoute from "./gauest_route";

export const appRoute = (
  <>
    <Route
      path={appPath.ROOT}
      element={<App />}
      ErrorBoundary={ErrorBoundary}
      errorElement={<h2>something went wrong</h2>}
    >
      {/* //user route  */}
      <Route element={<GuestRoute />}>
        <Route
          path={appPath.LOGIN}
          lazy={() => import("../pages/auth/login")}
        />
      </Route>

      <Route element={<UserLayout />}>
        <Route path={appPath.HOME} lazy={() => import("../pages/users/home")} />
        <Route
          path={appPath.ABOUT}
          lazy={() => import("../pages/users/about")}
        />
        <Route
          path={appPath.CONTACT}
          lazy={() => import("../pages/users/contact")}
        />
        <Route
          path={appPath.PRODUCTS}
          lazy={() => import("../pages/users/products")}
        />
        <Route path={appPath.CART} lazy={() => import("../pages/users/cart")} />
        <Route path={appPath.PROFILE} lazy={() => import("../pages/users/profile")} />
      </Route>
      <Route element={<Auth_route />}>
        <Route element={<Admin_routes />}>
          <Route
            element={<AdminLayout />}
            errorElement={<h2>admin dashboard error</h2>}
            ErrorBoundary={ErrorBoundary}
          >
            <Route
              path={appPath.ADMIN_DASHBOARD}
              lazy={() => import("../pages/admin/dashboard")}
            />
            <Route
              path={appPath.ADMIN_PRODUCTS}
              lazy={() => import("../pages/admin/products")}
            />
            <Route
              path={appPath.ADMIN_USERS}
              lazy={() => import("../pages/admin/user")}
            />
          </Route>
          {/* //admin route  */}
        </Route>
      </Route>
    </Route>
  </>
);