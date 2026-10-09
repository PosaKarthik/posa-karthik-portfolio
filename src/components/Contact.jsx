function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <p className="section-label section-label-dark">
            BUILD SOMETHING WITH ME
          </p>

          <h2>Let's build something meaningful.</h2>

          <p>
            I'm open to opportunities, collaborations, and conversations about
            software development. If you're working on something interesting,
            I'd be happy to connect.
          </p>
        </div>

        <div className="contact-links">
          <a href="mailto:posakarthik16@gmail.com">
            <span>Email</span>
            <span>→</span>
          </a>

          <a
            href="https://github.com/PosaKarthik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub</span>
            <span>→</span>
          </a>

          <a
            href="https://www.linkedin.com/in/posakarthik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LinkedIn</span>
            <span>→</span>
          </a>

          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Resume</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
