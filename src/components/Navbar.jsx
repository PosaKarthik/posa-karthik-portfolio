import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    closeMenu();

    const scroll = () => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // If we're on another route, return to the homepage first.
    if (window.location.hash !== "#/") {
      window.location.hash = "#/";
      setTimeout(scroll, 100);
    } else {
      scroll();
    }
  };

  const goHome = (event) => {
    event.preventDefault();
    closeMenu();

    if (window.location.hash !== "#/") {
      window.location.hash = "#/";
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#/" className="navbar-logo" onClick={goHome}>
          PK
        </a>

        <nav className="navbar-links">
          <a href="#/" onClick={goHome}>
            Home
          </a>
          <a href="#work" onClick={(event) => scrollToSection(event, "work")}>
            Work
          </a>
          <a
            href="#problems"
            onClick={(event) => scrollToSection(event, "problems")}
          >
            Problems
          </a>
          <a
            href="#learning"
            onClick={(event) => scrollToSection(event, "learning")}
          >
            Learning
          </a>
          <a
            href="#contact"
            onClick={(event) => scrollToSection(event, "contact")}
          >
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="navbar-resume"
          onClick={(event) => scrollToSection(event, "contact")}
        >
          Let's Connect
        </a>

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

      <nav className={`navbar-mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#/" onClick={goHome}>
          Home
        </a>

        <a href="#work" onClick={(event) => scrollToSection(event, "work")}>
          Work
        </a>

        <a
          href="#problems"
          onClick={(event) => scrollToSection(event, "problems")}
        >
          Problems
        </a>

        <a
          href="#learning"
          onClick={(event) => scrollToSection(event, "learning")}
        >
          Learning
        </a>

        <a
          href="#contact"
          onClick={(event) => scrollToSection(event, "contact")}
        >
          Contact
        </a>

        <a
          href="#contact"
          className="mobile-connect"
          onClick={(event) => scrollToSection(event, "contact")}
        >
          Let's Connect
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
