
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About MyStore</h3>
          <p className="text-gray-600 text-sm">
            MyStore offers the best products with fast delivery and great
            customer support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link
                to="/"
                className="hover:text-green-600 text-gray-700 text-sm"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-green-600 text-gray-700 text-sm"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-green-600 text-gray-700 text-sm"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-green-600 text-gray-700 text-sm"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-600 text-sm">Phone: +92 333 1234567</p>
          <p className="text-gray-600 text-sm">Email: info@mystore.com</p>
          <p className="text-gray-600 text-sm">Address: Skardu, Pakistan</p>
        </div>
      </div>

      <div className="text-center py-4 text-gray-500 text-sm border-t border-gray-200">
        © 2025 MyStore. All rights reserved.
      </div>
    </footer>
  );
}
