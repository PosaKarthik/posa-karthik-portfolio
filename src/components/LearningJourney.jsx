import learning from "../data/learning";

function LearningJourney() {
  return (
    <section id="learning">
      <div>
        <p>WHAT I'M FIGURING OUT</p>

        <h2>Learning Journey</h2>

        <p>
          I'm continuously improving my development skills by learning new
          technologies, building projects, and practicing problem-solving every
          day.
        </p>
      </div>

      <div>
        {learning.map((item) => (
          <article key={item.title}>
            <p>{item.status}</p>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default LearningJourney;
