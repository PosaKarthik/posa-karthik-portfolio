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

          <h1>{problem.title}</h1>

          <span className="problem-details-pattern">{problem.pattern}</span>
        </div>

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

        <a href="/#problems" className="problem-details-back">
          ← Back to Problem Journal
        </a>
      </div>
    </main>
  );
}

export default ProblemDetails;
