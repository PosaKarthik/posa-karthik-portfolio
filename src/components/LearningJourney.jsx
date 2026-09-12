import learning from "../data/learning";

function LearningJourney() {
  return (
    <section id="learning" className="learning">
      <div className="learning-container">
        <div className="learning-heading">
          <div>
            <p className="section-label">WHAT I'M FIGURING OUT</p>

            <h2>Learning Journey</h2>
          </div>

          <p>
            I'm continuously learning, building, and improving — one concept and
            one project at a time.
          </p>
        </div>

        <div className="learning-list">
          {learning.map((item, index) => (
            <article className="learning-item" key={item.title}>
              <div className="learning-index">0{index + 1}</div>

              <div className="learning-content">
                <div className="learning-title-row">
                  <h3>{item.title}</h3>

                  <span>{item.status}</span>
                </div>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearningJourney;
