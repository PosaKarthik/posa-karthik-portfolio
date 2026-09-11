import problems from "../data/problems";

function ProblemSolving() {
  return (
    <section id="problems">
      <div>
        <p>HOW I THINK</p>

        <h2>Problem-Solving Journal</h2>

        <p>
          I solve coding problems regularly to improve my problem-solving
          skills, recognize patterns, and write more efficient solutions.
        </p>
      </div>

      <div>
        {problems.map((problem) => (
          <article key={problem.id}>
            <p>
              {problem.platform} • {problem.difficulty}
            </p>

            <h3>{problem.title}</h3>

            <p>{problem.problem}</p>

            <p>Pattern: {problem.pattern}</p>

            <p>
              <strong>Brute Force:</strong> {problem.bruteForce}
            </p>

            <p>
              <strong>Optimal:</strong> {problem.optimal}
            </p>

            <p>
              <strong>Time:</strong> {problem.timeComplexity}
            </p>

            <p>
              <strong>Space:</strong> {problem.spaceComplexity}
            </p>

            <p>
              <strong>Takeaway:</strong> {problem.takeaway}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProblemSolving;
