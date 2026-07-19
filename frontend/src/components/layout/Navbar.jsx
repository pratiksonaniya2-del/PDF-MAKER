import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-white"
        : "text-zinc-400 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/icon2.jpeg"
            alt="PaperFlow"
            className="w-10 h-10 rounded-xl"
          />

          <span className="text-xl font-bold tracking-tight">
            PaperFlow
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>

        </nav>

        {/* Button */}
        

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-zinc-800">

          <nav className="flex flex-col">

            <NavLink
              to="/"
              className="px-6 py-4 hover:bg-zinc-900"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="px-6 py-4 hover:bg-zinc-900"
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className="px-6 py-4 hover:bg-zinc-900"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>

          </nav>

        </div>
      )}
    </header>
  );
}