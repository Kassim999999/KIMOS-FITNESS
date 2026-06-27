import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

import "../../../css/Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">

        <NavLink to="/" className="logo" onClick={closeMenu}>
          <span>KIMOS</span>
          <small>FITNESS</small>
        </NavLink>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-links">
            <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
            {/* <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
            <li><NavLink to="/memberships" onClick={closeMenu}>Memberships</NavLink></li>
            <li><NavLink to="/classes" onClick={closeMenu}>Classes</NavLink></li>
            <li><NavLink to="/trainers" onClick={closeMenu}>Trainers</NavLink></li>
            <li><NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li> */}

              <li><span className="disabled-link">About</span></li>
  <li><span className="disabled-link">Memberships</span></li>
  <li><span className="disabled-link">Classes</span></li>
  <li><span className="disabled-link">Trainers</span></li>
  <li><span className="disabled-link">Gallery</span></li>
  <li><span className="disabled-link">Contact</span></li>
          </ul>
        </nav>

        <div className="nav-right">

          <a href="tel:+254113 979766" className="phone">
            <FaPhoneAlt />
            <span>+254 113 979766</span>
          </a>

          <button className="join-btn">
            Join Now
          </button>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;