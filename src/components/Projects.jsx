import projects from "../data/projects";

function Projects() {
  return (
    <section id="work" className="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <div>
            <p className="section-label">THINGS I'VE SHIPPED</p>

            <h2>Projects</h2>
          </div>

          <p>
            Real applications I've built while learning, experimenting, and
            turning ideas into working software.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-number">0{project.id}</div>

              <div className="project-content">
                <p className="project-type">{project.type}</p>

                <h3>{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </a>

                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
