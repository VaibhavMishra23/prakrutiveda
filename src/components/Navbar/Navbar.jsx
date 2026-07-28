import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import animationImage from "../../assets/Logo.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="pv-navbar">
        <div className="pv-navbar-container">

          {/* Logo */}
          <NavLink to="/" className="pv-logo" onClick={closeMenu}>
            <img
              src={animationImage}
              alt="Prakruti Veda Logo"
              className="pv-logo-img"
            />
            <span>PrakrutiVeda</span>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="pv-nav-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/products">Products</NavLink>
            </li>

            <li>
              <NavLink to="/about">About</NavLink>
            </li>

            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>

          {/* Hamburger */}
          <div
            className="pv-menu-icon"
            onClick={() => setMenuOpen(true)}
          >
            <HiOutlineMenuAlt3 />
          </div>

        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="pv-overlay"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Drawer */}
      <div className={`pv-mobile-menu ${menuOpen ? "active" : ""}`}>

        <div className="pv-mobile-header">

          <div className="pv-mobile-logo">

            <img
              src={animationImage}
              alt="Logo"
            />

            <span>Prakruti Veda</span>

          </div>

          <div
            className="pv-close"
            onClick={closeMenu}
          >
            <HiOutlineX />
          </div>

        </div>

        <NavLink to="/" onClick={closeMenu}>
          🏠 Home
        </NavLink>

        <NavLink to="/products" onClick={closeMenu}>
          📦 Products
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          👤 About
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          📞 Contact
        </NavLink>

        <div className="pv-mobile-bottom">

          <p>
            🌿 Pure Ayurveda, Trusted Naturally.
          </p>

          {/* <div className="pv-mobile-social">

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

          </div> */}

        </div>

      </div>
    </>
  );
}

export default Navbar;