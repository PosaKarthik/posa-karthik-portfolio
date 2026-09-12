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
                  <p className="problem-number">0{problem.id}</p>

                  <h3>{problem.title}</h3>
                </div>

                <p>{problem.problem}</p>
              </div>

              <div className="problem-approach">
                <div>
                  <span>BRUTE FORCE</span>
                  <p>{problem.bruteForce}</p>
                </div>

                <div>
                  <span>OPTIMAL</span>
                  <p>{problem.optimal}</p>
                </div>
              </div>

              <div className="problem-footer">
                <span>Time: {problem.timeComplexity}</span>

                <span>Space: {problem.spaceComplexity}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemSolving;
