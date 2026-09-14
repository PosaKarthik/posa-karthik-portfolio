import problems from "../data/problems";

function ProblemSolving() {
  return (
    <section id="problems" className="problem-solving">
      <div className="problem-solving-container">
        <div className="problem-solving-heading">
          <div>
            <p className="section-label section-label-dark">HOW I THINK</p>

            <h2>Problem-Solving Journal</h2>
          </div>

          <p>
            A record of the coding problems I solve, the patterns I discover,
            and how I improve a solution from brute force to optimal.
          </p>
        </div>

        <div className="problem-list">
          {problems.map((problem) => (
            <article className="problem-card" key={problem.id}>
              <div className="problem-card-top">
                <span>
                  {problem.platform} · {problem.difficulty}
                </span>

                <span>{problem.pattern}</span>
              </div>

              <div className="problem-card-content">
                <div>
                  <p className="problem-number">
                    {String(problem.id).padStart(2, "0")}
                  </p>

                  <h3>{problem.title}</h3>
                </div>

                <p>{problem.problem}</p>
              </div>

              <div className="problem-approach">
                <div>
                  <span>BRUTE FORCE</span>

                  <p>{problem.bruteForce.explanation}</p>

                  <div className="problem-complexity">
                    <span>Time</span>
                    <strong>{problem.bruteForce.timeComplexity}</strong>

                    <span>Space</span>
                    <strong>{problem.bruteForce.spaceComplexity}</strong>
                  </div>
                </div>

                <div>
                  <span>OPTIMAL</span>

                  <p>{problem.optimal.explanation}</p>

                  <div className="problem-complexity">
                    <span>Time</span>
                    <strong>{problem.optimal.timeComplexity}</strong>

                    <span>Space</span>
                    <strong>{problem.optimal.spaceComplexity}</strong>
                  </div>
                </div>
              </div>

              <div className="problem-reasoning">
                <span>MY REASONING</span>

                <p>{problem.reasoning}</p>
              </div>

              <div className="problem-takeaway">
                <span>KEY TAKEAWAY</span>

                <p>{problem.takeaway}</p>
              </div>
              <a href={`/problems/${problem.id}`} className="problem-view">
                <span>View Full Solution</span>
                <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemSolving;
