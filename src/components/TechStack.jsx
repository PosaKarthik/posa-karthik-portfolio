import skills from "../data/skills";

function TechStack() {
  return (
    <section className="tech-stack">
      <div className="tech-stack-container">
        <div className="tech-stack-heading">
          <p className="section-label section-label-dark">WHAT I BUILD WITH</p>

          <h2>Technologies & Tools</h2>

          <p>
            The technologies I use to build applications, solve problems, and
            keep improving as a developer.
          </p>
        </div>

        <div className="tech-stack-grid">
          {skills.map((skill) => (
            <article className="tech-card" key={skill.category}>
              <p className="tech-category">{skill.category}</p>

              <div className="tech-list">
                {skill.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
