import projects from "../data/projects";

function AllProjects() {
  return (
    <section className="all-projects">
      <div className="all-projects-container">
        <div className="all-projects-heading">
          <p className="section-label">ALL PROJECTS</p>

          <h1>
            Things I've
            <br />
            built so far.
          </h1>

          <p>
            A collection of applications I've built while learning,
            experimenting, and turning ideas into working software.
          </p>
        </div>

        <div className="all-projects-grid">
          {projects.map((project) => (
            <article className="all-project-card" key={project.id}>
              <div className="all-project-number">
                {String(project.id).padStart(2, "0")}
              </div>

              <div className="all-project-content">
                <div className="project-meta">
                  <p className="project-type">{project.type}</p>
                  <span className="project-status">{project.status}</span>
                </div>

                <h2>{project.title}</h2>

                <p className="project-description">{project.description}</p>

                {project.problem && (
                  <div className="project-problem">
                    <span>WHAT I BUILT IT FOR</span>
                    <p>{project.problem}</p>
                  </div>
                )}

                {project.features && (
                  <div className="project-features">
                    <span>KEY FEATURES</span>

                    <ul>
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

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

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="all-projects-back">
          <a href={import.meta.env.BASE_URL}>← Back to Home</a>
        </div>
      </div>
    </section>
  );
}

export default AllProjects;
