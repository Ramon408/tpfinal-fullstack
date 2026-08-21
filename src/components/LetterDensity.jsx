import { ProgressBar } from "./ProgressBar"

const LetterDensity = ({ sortLetters }) => {
  return (
    <section className="letter-density">
      <h2>Letter Density</h2>

      <article className="density-list">
        <ul>
          {sortLetters.slice(0, 5).map((letter) => (
            <ProgressBar
              key={letter.letterName}
              letter={letter}
            />
          ))}
        </ul>
      </article>

      {sortLetters.length > 5 && (
        <details>
          <summary>See more</summary>

          <ul className="meter-list">
            {sortLetters.slice(5).map((letter) => (
              <ProgressBar
                key={letter.letterName}
                letter={letter}
              />
            ))}
          </ul>
        </details>
      )}
    </section>
  )
}

export { LetterDensity }