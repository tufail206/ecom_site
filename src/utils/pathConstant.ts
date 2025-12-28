export const appPath = {
  // ================== PUBLIC ROUTES ==================
  ROOT: "/",
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  SERVICES: "/services",
  FAQ: "/faq",
  TERMS: "/terms",
  PRIVACY: "/privacy",

  // ================== AUTH ROUTES ==================
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password/:token",
  VERIFY_EMAIL: "/verify-email/:token",

  // ================== PRODUCT ROUTES ==================
  PRODUCTS: "/products",
  PRODUCT_DETAILS: "/products/:id", // or :id
  PRODUCT_CATEGORY: "/products/category/:category",
  PRODUCT_SEARCH: "/products/search",
  PRODUCT_FILTER: "/products/filter",

  // ================== CART & CHECKOUT ==================
  CART: "/cart",
  CHECKOUT: "/checkout",
  SHIPPING: "/checkout/shipping",
  PAYMENT: "/checkout/payment",
  ORDER_SUCCESS: "/order-success",
  ORDER_FAILED: "/order-failed",

  // ================== USER ROUTES ==================
  PROFILE: "/profile",
  PROFILE_EDIT: "/profile/edit",
  MY_ORDERS: "/profile/orders",
  ORDER_DETAILS: "/profile/orders/:orderId",
  WISHLIST: "/profile/wishlist",
  ADDRESSES: "/profile/addresses",
  CHANGE_PASSWORD: "/profile/change-password",

  // ================== ADMIN ROUTES ==================
  ADMIN_DASHBOARD: "/dashboard",

  ADMIN_PRODUCTS: "/dashboard/products",
  ADMIN_ADD_PRODUCT: "/dashboard/products/add",
  ADMIN_EDIT_PRODUCT: "/dashboard/products/edit/:id",

  ADMIN_CATEGORIES: "/dashboard/categories",
  ADMIN_ORDERS: "/dashboard/orders",
  ADMIN_ORDER_DETAILS: "/dashboard/orders/:id",

  ADMIN_USERS: "/dashboard/users",
  ADMIN_USER_DETAILS: "/dashboard/users/:id",

  ADMIN_COUPONS: "/dashboard/coupons",
  ADMIN_SETTINGS: "/dashboard/settings",

  // ================== ERROR ROUTES ==================
  NOT_FOUND: "*",
  UNAUTHORIZED: "/unauthorized",
};
