import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          PK
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#problems">Problems</a>
          <a href="#learning">Learning</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Desktop Connect Button */}
        <a href="#contact" className="navbar-resume">
          Let's Connect
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`navbar-menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`navbar-mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#work" onClick={closeMenu}>
          Work
        </a>

        <a href="#problems" onClick={closeMenu}>
          Problems
        </a>

        <a href="#learning" onClick={closeMenu}>
          Learning
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <a href="#contact" className="mobile-connect" onClick={closeMenu}>
          Let's Connect
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
