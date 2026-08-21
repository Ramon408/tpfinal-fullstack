const ProgressBar = ({ letter }) => {
  return (
    <li className="density-item">
      <span className="density-letter">
        {letter.letterName.toUpperCase()}
      </span>

      <div className="density-bar">
        <div
          className="density-bar-fill"
          style={{ width: `${letter.percentage}%` }}
        ></div>
      </div>

      <span className="density-value">
        {letter.amount} ({letter.percentage.toFixed(1)}%)
      </span>
    </li>
  )
}

export { ProgressBar }