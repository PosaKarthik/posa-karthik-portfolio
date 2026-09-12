function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-logo">PK</span>
          <p>Posa Karthik</p>
        </div>

        <p className="footer-message">Building. Solving. Improving.</p>

        <p className="footer-copy">© {new Date().getFullYear()} Posa Karthik</p>
      </div>
    </footer>
  );
}

export default Footer;
