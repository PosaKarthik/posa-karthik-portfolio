import { useState } from "react";
import problems from "../data/problems";

function ProblemSolving() {
  const [searchTerm, setSearchTerm] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [pattern, setPattern] = useState("All");
  const filteredProblems = problems.filter((problem) => {
    const matchesSearch = problem.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesDifficulty =
      difficulty === "All" || problem.difficulty === difficulty;

    const matchesPattern = pattern === "All" || problem.pattern === pattern;

    return matchesSearch && matchesDifficulty && matchesPattern;
  });
  const difficulties = ["All", "Easy", "Medium", "Hard"];

  const patterns = [
    "All",
    ...new Set(problems.map((problem) => problem.pattern)),
  ];
  return (
    <section id="problems" className="problem-solving">
      <div className="problem-solving-container">
        <div className="problem-solving-heading">
          <div>
            <p className="section-label section-label-dark">HOW I THINK</p>

            <h2>Problem-Solving Journal</h2>
            <p className="problem-count">
              {filteredProblems.length}{" "}
              {filteredProblems.length === 1 ? "problem" : "problems"} found
            </p>
          </div>

          <p>
            A record of the coding problems I solve, the patterns I discover,
            and how I improve a solution from brute force to optimal.
          </p>
        </div>
        <div className="problem-filters">
          <input
            type="text"
            placeholder="Search problems..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <select
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value)}
          >
            {difficulties.map((item) => (
              <option key={item} value={item}>
                {item === "All" ? "All Difficulties" : item}
              </option>
            ))}
          </select>

          <select
            value={pattern}
            onChange={(event) => setPattern(event.target.value)}
          >
            {patterns.map((item) => (
              <option key={item} value={item}>
                {item === "All" ? "All Patterns" : item}
              </option>
            ))}
          </select>
        </div>

        <div className="problem-list">
          {filteredProblems.length > 0 ? (
            filteredProblems.map((problem) => (
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
            ))
          ) : (
            <div className="problem-empty">
              <h3>No problems found.</h3>
              <p>
                Try changing your search or filters to find another problem.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProblemSolving;
