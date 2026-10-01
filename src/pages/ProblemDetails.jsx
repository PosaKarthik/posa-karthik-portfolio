import { useState } from "react";
import { useParams } from "react-router-dom";
import problems from "../data/problems";

function ProblemDetails() {
  const { id } = useParams();
  const [copied, setCopied] = useState("");

  const problem = problems.find((item) => item.id === Number(id));

  const copyCode = async (code, type) => {
    await navigator.clipboard.writeText(code);

    setCopied(type);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  if (!problem) {
    return (
      <main className="problem-details">
        <div className="problem-details-container">
          <h1>Problem Not Found</h1>

          <p>The problem you're looking for doesn't exist.</p>

          <a
            href={`${import.meta.env.BASE_URL}problems`}
            className="problem-details-back"
          >
            ← Back to Problem Journal
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="problem-details">
      <div className="problem-details-container">
        <div className="problem-details-header">
          <p className="section-label">
            {problem.platform} · {problem.difficulty}
          </p>

          <p className="problem-details-journal-number">
            PROBLEM {String(problem.id).padStart(2, "0")}
          </p>

          {problem.platform === "LeetCode" && (
            <p className="problem-details-leetcode-number">
              LEETCODE #{problem.problemNumber}
            </p>
          )}

          <h1>{problem.title}</h1>

          <span className="problem-details-pattern">{problem.pattern}</span>
        </div>

        {problem.type === "Practice" ? (
          <section className="problem-details-section">
            <p className="problem-details-label">PRACTICE ENTRY</p>

            <p>
              This problem is part of my Java DSA practice journey. I solved it
              while working through the Arrays section of my DSA Mastery
              repository.
            </p>

            <div className="problem-practice-info">
              <div>
                <span>TYPE</span>
                <strong>DSA Practice</strong>
              </div>

              <div>
                <span>TOPIC</span>
                <strong>{problem.pattern}</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong>Practiced</strong>
              </div>
            </div>

            <p className="problem-practice-note">
              Detailed solution notes, approach, and complexity analysis will be
              documented as this problem journal evolves.
            </p>
          </section>
        ) : (
          <>
            <section className="problem-details-section">
              <p className="problem-details-label">PROBLEM</p>

              <p>{problem.problem}</p>
            </section>

            <section className="problem-details-section">
              <p className="problem-details-label">BRUTE FORCE</p>

              <p>{problem.bruteForce.explanation}</p>

              <div className="problem-code-wrapper">
                <button
                  className="copy-code-button"
                  onClick={() => copyCode(problem.bruteForce.code, "brute")}
                >
                  {copied === "brute" ? "Copied!" : "Copy Code"}
                </button>

                <pre className="problem-code">
                  <code>{problem.bruteForce.code}</code>
                </pre>
              </div>

              <div className="problem-details-complexity">
                <span>
                  Time: <strong>{problem.bruteForce.timeComplexity}</strong>
                </span>

                <span>
                  Space: <strong>{problem.bruteForce.spaceComplexity}</strong>
                </span>
              </div>
            </section>

            <section className="problem-details-section">
              <p className="problem-details-label">OPTIMAL APPROACH</p>

              <p>{problem.optimal.explanation}</p>

              <div className="problem-code-wrapper">
                <button
                  className="copy-code-button"
                  onClick={() => copyCode(problem.optimal.code, "optimal")}
                >
                  {copied === "optimal" ? "Copied!" : "Copy Code"}
                </button>

                <pre className="problem-code">
                  <code>{problem.optimal.code}</code>
                </pre>
              </div>

              <div className="problem-details-complexity">
                <span>
                  Time: <strong>{problem.optimal.timeComplexity}</strong>
                </span>

                <span>
                  Space: <strong>{problem.optimal.spaceComplexity}</strong>
                </span>
              </div>
            </section>

            <section className="problem-details-section">
              <p className="problem-details-label">MY REASONING</p>

              <p>{problem.reasoning}</p>
            </section>

            <section className="problem-details-section problem-details-takeaway">
              <p className="problem-details-label">KEY TAKEAWAY</p>

              <p>{problem.takeaway}</p>
            </section>
          </>
        )}

        <a
          href={`${import.meta.env.BASE_URL}problems`}
          className="problem-details-back"
        >
          ← Back to Problem Journal
        </a>
      </div>
    </main>
  );
}

export default ProblemDetails;
