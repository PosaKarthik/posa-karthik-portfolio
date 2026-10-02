import { useState } from "react";
import problems from "../data/problems";

function Problems() {
  const [searchTerm, setSearchTerm] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [pattern, setPattern] = useState("All");
  const [platform, setPlatform] = useState("All");

  const leetCodeCount = problems.filter(
    (problem) => problem.platform === "LeetCode",
  ).length;

  const dsaPracticeCount = problems.filter(
    (problem) => problem.platform === "DSA Practice",
  ).length;

  const totalProblems = problems.length;

  const filteredProblems = problems.filter((problem) => {
    const matchesSearch = problem.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesDifficulty =
      difficulty === "All" || problem.difficulty === difficulty;

    const matchesPattern = pattern === "All" || problem.pattern === pattern;

    const matchesPlatform = platform === "All" || problem.platform === platform;

    return (
      matchesSearch && matchesDifficulty && matchesPattern && matchesPlatform
    );
  });

  return (
    <main className="problem-journal-page">
      <div className="problem-journal-container">
        <a
          href={`${import.meta.env.BASE_URL}`}
          className="problem-journal-home"
        >
          ← Back to Home
        </a>

        <div className="problem-journal-header">
          <p className="section-label section-label-dark">HOW I THINK</p>

          <h1>Problem Journal</h1>

          <p>
            A collection of problems I've solved while improving my
            problem-solving skills, learning patterns, and understanding better
            approaches.
          </p>
        </div>

        <div className="problem-journal-stats">
          <div>
            <span>LEETCODE</span>
            <strong>{leetCodeCount}</strong>
            <p>Problems Solved</p>
          </div>

          <div>
            <span>DSA PRACTICE</span>
            <strong>{dsaPracticeCount}</strong>
            <p>Problems Solved</p>
          </div>

          <div>
            <span>TOTAL</span>
            <strong>{totalProblems}</strong>
            <p>Problem Entries</p>
          </div>
        </div>

        <div className="problem-filters">
          <input
            type="text"
            className="problem-search"
            placeholder="Search problems..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <select
            className="problem-filter"
            value={platform}
            onChange={(event) => setPlatform(event.target.value)}
          >
            <option value="All">All Platforms</option>
            <option value="LeetCode">LeetCode</option>
            <option value="DSA Practice">DSA Practice</option>
          </select>

          <select
            className="problem-filter"
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value)}
          >
            <option value="All">All Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
            <option value="Practice">Practice</option>
          </select>

          <select
            className="problem-filter"
            value={pattern}
            onChange={(event) => setPattern(event.target.value)}
          >
            <option value="All">All Patterns</option>
            <option value="HashMap">HashMap</option>
            <option value="Arrays">Arrays</option>
          </select>
        </div>

        <div className="problem-list">
          {filteredProblems.map((problem) => (
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

          {filteredProblems.length === 0 && (
            <p className="problem-empty">
              No problems found matching your search.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

export default Problems;
