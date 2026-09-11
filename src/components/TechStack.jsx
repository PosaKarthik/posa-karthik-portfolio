import skills from "../data/skills";

function TechStack() {
  return (
    <section>
      <div>
        <p>WHAT I BUILD WITH</p>

        <h2>Technologies & Tools</h2>

        <p>
          The technologies I use to build applications, solve problems, and keep
          improving as a developer.
        </p>
      </div>

      <div>
        {skills.map((skill) => (
          <article key={skill.category}>
            <h3>{skill.category}</h3>

            <p>{skill.technologies.join(" • ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
