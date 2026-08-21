const ProgressBar = ({ letter }) => {
  return (
    <li className="density-item">
      <span className="density-letter">
        {letter.letterName.toUpperCase()}
      </span>

      <meter
        min="0"
        max="100"
        value={letter.percentage}
      />

      <span className="density-value">
        {letter.amount} ({letter.percentage.toFixed(1)}%)
      </span>
    </li>
  )
}

export { ProgressBar }