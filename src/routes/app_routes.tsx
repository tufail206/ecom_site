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
        <Route
          path={appPath.REGISTER}
          lazy={() => import("../pages/auth/register")}
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
        <Route
          path={appPath.PRODUCT_DETAILS}
          lazy={() => import("../pages/users/products/ProductDetails")}
        />
        <Route path={appPath.CART} lazy={() => import("../pages/users/cart")} />
        <Route path={appPath.PROFILE} lazy={() => import("../pages/users/profile")} />
        <Route path={appPath.CHECKOUT} lazy={() => import("../pages/users/checkout")} />
        <Route path={appPath.ORDER_SUCCESS} element={
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-black text-gray-900 mb-2">Order Confirmed!</h1>
            <p className="text-gray-500 max-w-md mx-auto mb-8">Your payment was processed successfully. We've sent a confirmation email with your order details.</p>
            <button
              onClick={() => window.location.href = "/"}
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg shadow-green-100"
            >
              Continue Shopping
            </button>
          </div>
        } />
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
              path={appPath.ADMIN_ORDERS}
              lazy={() => import("../pages/admin/orders")}
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