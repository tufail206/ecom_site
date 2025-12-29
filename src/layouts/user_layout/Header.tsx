import React, { useState } from "react";
import { Menu, ShoppingCart, User, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function UserHeader() {
  const [open, setOpen] = useState(false);
 const [isLoggedIn,setIsLoggedIn]=useState(true);
  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-green-600">
              MyStore
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-6">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>

            {/* Right Icons (Cart visible on all screens) */}
            <div className="flex items-center space-x-4">
              <Link to="/cart" className="relative">
                <ShoppingCart />
                {/* Example cart badge */}
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full px-1">
                  2
                </span>
              </Link>

              {/* Profile only on desktop */}
              {isLoggedIn ? (
                <Link to="/profile" className="hidden md:block">
                  <User />
                </Link>
              ) : (
                <Link to={"/login"}>
                  {" "}
                  <User />
                </Link>
              )}

              {/* Hamburger */}
              <button className="md:hidden" onClick={() => setOpen(true)}>
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-3">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/products" onClick={() => setOpen(false)}>
            Products
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link to="/profile" onClick={() => setOpen(false)}>
            Profile
          </Link>
        </nav>
      </div>
    </>
  );
}
