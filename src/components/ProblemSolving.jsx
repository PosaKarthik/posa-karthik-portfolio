import problems from "../data/problems";

function ProblemSolving() {
  const featuredProblemIds = [1, 13, 14, 17, 21, 18];

  const featuredProblems = featuredProblemIds
    .map((id) => problems.find((problem) => problem.id === id))
    .filter(Boolean);

  const leetCodeCount = problems.filter(
    (problem) => problem.platform === "LeetCode",
  ).length;

  const dsaPracticeCount = problems.filter(
    (problem) => problem.platform === "DSA Practice",
  ).length;

  const totalProblems = problems.length;

  return (
    <section id="problems" className="problem-solving">
      <div className="problem-solving-container">
        <div className="problem-solving-heading">
          <div>
            <p className="section-label section-label-dark">HOW I THINK</p>

            <h2>Problem Journal</h2>
          </div>

          <p>
            A glimpse into how I approach problems, learn patterns, and improve
            my solutions through practice.
          </p>
        </div>

        <div className="problem-journal-summary">
          <span>{leetCodeCount} LeetCode</span>
          <span>{dsaPracticeCount} DSA Practice</span>
          <span>{totalProblems} Problem Entries</span>
        </div>

        <div className="problem-journal-preview">
          {featuredProblems.map((problem) => (
            <article className="problem-card" key={problem.id}>
              <div className="problem-card-top">
                <span>{problem.platform}</span>
                <span>{problem.difficulty}</span>
              </div>

              <div className="problem-card-content">
                <div>
                  <p className="problem-number">
                    PROBLEM {String(problem.id).padStart(2, "0")}
                  </p>

                  {problem.platform === "LeetCode" && (
                    <p className="problem-platform-number">
                      LEETCODE #{problem.problemNumber}
                    </p>
                  )}

                  <h3 className="problem-title">{problem.title}</h3>
                </div>

                <p>
                  {problem.type === "Practice"
                    ? "A problem practiced as part of my Java DSA Arrays journey."
                    : problem.problem}
                </p>
              </div>

              <div className="problem-approach">
                <div>
                  <span>PATTERN</span>
                  <p>{problem.pattern}</p>
                </div>

                <div>
                  <span>TYPE</span>
                  <p>
                    {problem.type === "Practice" ? "DSA Practice" : "LeetCode"}
                  </p>
                </div>
              </div>

              <div className="problem-footer">
                <a href={`${import.meta.env.BASE_URL}problems/${problem.id}`}>
                  View Problem →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="problem-journal-cta">
          <a
            href={`${import.meta.env.BASE_URL}problems`}
            className="button button-primary"
          >
            Explore Full Problem Journal →
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProblemSolving;
