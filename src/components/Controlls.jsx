const Controlls = ({
  excludeSpaces,
  handleExcludeSpaces,
  limitCharacter,
  handleChangeInputLimit,
  limitValue,
  handleLimitValue
}) => {
  return (
    <section className="controls">
      <div className="control-options">
        <label>
          <input
            type="checkbox"
            checked={excludeSpaces}
            onChange={handleExcludeSpaces}
          />
          <span>Exclude Spaces</span>
        </label>

        <label>
          <input
            type="checkbox"
            checked={limitCharacter}
            onChange={handleChangeInputLimit}
          />
          <span>Set Character Limit</span>
        </label>

        {limitCharacter && (
          <input
            className="limit-input"
            type="number"
            min="1"
            value={limitValue}
            onChange={(e) => handleLimitValue(e.target.value)}
          />
        )}
      </div>

      <span className="reading-time">
        Approx. reading time: &lt;1 minute
      </span>
    </section>
  )
}

export { Controlls }