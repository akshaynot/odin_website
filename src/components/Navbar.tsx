import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  // 1. Add state to track scrolling
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  // 2. Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls down more than 20px, set isScrolled to true
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Close on esc key
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    // 3. Update nav className to be dynamic
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg" // Scrolled: Semi-transparent + Blur
          : "bg-white shadow-none" // Top: Solid white (or transparent if you prefer)
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
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
                isActive("/") ? "text-orange-500" : "text-gray-700"
              } hover:text-orange-500 px-3 py-2 text-sm font-medium transition`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                isActive("/about") ? "text-orange-500" : "text-gray-700"
              } hover:text-orange-500 px-3 py-2 text-sm font-medium transition`}
            >
              About Us
            </Link>
            <Link
              to="/work"
              className={`${
                isActive("/work") ? "text-orange-500" : "text-gray-700"
              } hover:text-orange-500 px-3 py-2 text-sm font-medium transition`}
            >
              Our Work
            </Link>
            <Link
              to="/get-involved"
              className={`${
                isActive("/get-involved") ? "text-orange-500" : "text-gray-700"
              } hover:text-orange-500 px-3 py-2 text-sm font-medium transition`}
            >
              Get Involved
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive("/contact") ? "text-orange-500" : "text-gray-700"
              } hover:text-orange-500 px-3 py-2 text-sm font-medium transition`}
            >
              Contact
            </Link>
            <Link
              to="/donate"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-md text-gray-600 hover:text-orange-500 hover:bg-gray-100 focus:outline-none transition"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="block h-7 w-7" aria-hidden="true" />
              ) : (
                <Menu className="block h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          tabIndex={-1}
          aria-hidden="true"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Navigation (sidebar) */}
      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-full z-50 bg-white shadow-xl transform transition-transform duration-300 md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="p-2 rounded-md text-gray-600 hover:text-orange-500 focus:outline-none"
            aria-label="Close Menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col items-start px-6 space-y-3 mt-4 text-lg font-medium">
          <Link
            to="/"
            onClick={closeMenu}
            className={`${
              isActive("/") ? "text-orange-500" : "text-gray-700"
            } hover:text-orange-500 py-2 w-full transition`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className={`${
              isActive("/about") ? "text-orange-500" : "text-gray-700"
            } hover:text-orange-500 py-2 w-full transition`}
          >
            About Us
          </Link>
          <Link
            to="/work"
            onClick={closeMenu}
            className={`${
              isActive("/work") ? "text-orange-500" : "text-gray-700"
            } hover:text-orange-500 py-2 w-full transition`}
          >
            Our Work
          </Link>
          <Link
            to="/get-involved"
            onClick={closeMenu}
            className={`${
              isActive("/get-involved") ? "text-orange-500" : "text-gray-700"
            } hover:text-orange-500 py-2 w-full transition`}
          >
            Get Involved
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className={`${
              isActive("/contact") ? "text-orange-500" : "text-gray-700"
            } hover:text-orange-500 py-2 w-full transition`}
          >
            Contact
          </Link>
          <Link
            to="/donate"
            onClick={closeMenu}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full w-full text-center mt-6 transition"
          >
            Donate Now
          </Link>
        </nav>
      </div>
    </nav>
  );
}