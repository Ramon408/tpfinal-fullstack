const Stats = ({ characters, words, sentences }) => {
  return (
    <section className="stats-section">
      <article className="stat-card stat-card-purple">
        <div className="stat-decoration decoration-purple"></div>

        <span className="stat-number">
          {String(characters).padStart(2, "0")}
        </span>

        <span className="stat-label">
          Total Characters
        </span>
      </article>

      <article className="stat-card stat-card-orange">
        <div className="stat-decoration decoration-orange"></div>

        <span className="stat-number">
          {String(words).padStart(2, "0")}
        </span>

        <span className="stat-label">
          Word Count
        </span>
      </article>

      <article className="stat-card stat-card-red">
        <div className="stat-decoration decoration-red"></div>

        <span className="stat-number">
          {String(sentences).padStart(2, "0")}
        </span>

        <span className="stat-label">
          Sentence Count
        </span>
      </article>
    </section>
  )
}

export { Stats }