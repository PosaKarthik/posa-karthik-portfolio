import myPicture from "../assets/portfolio-picture.png";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-label">JAVA FULL STACK DEVELOPER</p>

          <h1>
            I build things,
            <br />
            solve problems,
            <br />
            and keep improving.
          </h1>

          <p className="hero-description">
            I'm Posa Karthik, a Java Full Stack Developer focused on building
            practical applications and improving my problem-solving skills every
            day.
          </p>

          <div className="hero-actions">
            <a href="#work" className="button button-primary">
              Explore My Work
            </a>

            <a href="#problems" className="button button-secondary">
              See How I Think
            </a>
          </div>
        </div>

        <div className="hero-side">
          <div className="hero-visual">
            <div className="hero-visual-shape"></div>

            <img src={myPicture} alt="Posa Karthik" className="hero-image" />

            <div className="hero-values">
              <p>BUILD</p>
              <p>SOLVE</p>
              <p>IMPROVE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
