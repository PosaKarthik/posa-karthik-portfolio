import projects from "../data/projects";

function Projects() {
  return (
    <section id="work">
      <div>
        <p>THINGS I'VE SHIPPED</p>

        <h2>Projects</h2>

        <p>
          A collection of applications I've built while learning, experimenting,
          and turning ideas into working software.
        </p>
      </div>

      <div>
        {projects.map((project) => (
          <article key={project.id}>
            <p>{project.type}</p>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p>{project.technologies.join(" • ")}</p>

            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>

            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
