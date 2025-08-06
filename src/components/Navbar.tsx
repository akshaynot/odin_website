import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    // Prevent the overlay click handler from firing
    e.stopPropagation();
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex-shrink-0 flex items-center"
              onClick={closeMenu}
            >
              <span className="text-2xl font-bold text-orange-500">ODIN</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive("/") ? "text-orange-500" : "text-gray-600"
              } hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                isActive("/about") ? "text-orange-500" : "text-gray-600"
              } hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              About Us
            </Link>
            <Link
              to="/work"
              className={`${
                isActive("/work") ? "text-orange-500" : "text-gray-600"
              } hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Our Work
            </Link>
            <Link
              to="/get-involved"
              className={`${
                isActive("/get-involved") ? "text-orange-500" : "text-gray-600"
              } hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Get Involved
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive("/contact") ? "text-orange-500" : "text-gray-600"
              } hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Contact
            </Link>
            <Link
              to="/donate"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-orange-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-xl transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
        onClick={handleMenuClick}
      >
        <div className="pt-20 pb-6 px-4">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className={`${
                isActive("/") ? "text-orange-500" : "text-gray-600"
              } hover:text-orange-500 px-3 py-2 text-lg font-medium transition-colors duration-200`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                isActive("/about") ? "text-orange-500" : "text-gray-600"
              } hover:text-orange-500 px-3 py-2 text-lg font-medium transition-colors duration-200`}
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link
              to="/work"
              className={`${
                isActive("/work") ? "text-orange-500" : "text-gray-600"
              } hover:text-orange-500 px-3 py-2 text-lg font-medium transition-colors duration-200`}
              onClick={closeMenu}
            >
              Our Work
            </Link>
            <Link
              to="/get-involved"
              className={`${
                isActive("/get-involved") ? "text-orange-500" : "text-gray-600"
              } hover:text-orange-500 px-3 py-2 text-lg font-medium transition-colors duration-200`}
              onClick={closeMenu}
            >
              Get Involved
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive("/contact") ? "text-orange-500" : "text-gray-600"
              } hover:text-orange-500 px-3 py-2 text-lg font-medium transition-colors duration-200`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link
              to="/get-involved#donate"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-medium transition-colors duration-200 text-center mt-4"
              onClick={closeMenu}
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
}
