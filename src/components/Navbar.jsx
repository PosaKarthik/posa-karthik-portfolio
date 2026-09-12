function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          PK
        </a>

        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#problems">Problems</a>
          <a href="#learning">Learning</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="navbar-resume">
          Let's Connect
        </a>
      </div>
    </header>
  );
}

export default Navbar;
