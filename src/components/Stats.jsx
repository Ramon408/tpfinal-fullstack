const Stats = ({ characters, words, sentences, readingTime }) => {
  return (
    <section className="stats-section">
      <div className="stat-card stat-card-purple">
        <span className="stat-number">
          {String(characters).padStart(2, "0")}
        </span>
        <span className="stat-label">Total Characters</span>
      </div>

      <div className="stat-card stat-card-orange">
        <span className="stat-number">
          {String(words).padStart(2, "0")}
        </span>
        <span className="stat-label">Word Count</span>
      </div>

      <div className="stat-card stat-card-red">
        <span className="stat-number">
          {String(sentences).padStart(2, "0")}
        </span>
        <span className="stat-label">Sentence Count</span>
      </div>
    </section>
  )
}

export { Stats }