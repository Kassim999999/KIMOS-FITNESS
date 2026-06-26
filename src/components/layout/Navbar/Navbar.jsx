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
            <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
            <li><NavLink to="/memberships" onClick={closeMenu}>Memberships</NavLink></li>
            <li><NavLink to="/classes" onClick={closeMenu}>Classes</NavLink></li>
            <li><NavLink to="/trainers" onClick={closeMenu}>Trainers</NavLink></li>
            <li><NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
          </ul>
        </nav>

        <div className="nav-right">

          <a href="tel:+254700000000" className="phone">
            <FaPhoneAlt />
            <span>+254 700 000 000</span>
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