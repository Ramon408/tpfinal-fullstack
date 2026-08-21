import { useContext, useState } from "react"
import { Header } from "./components/Header.jsx"
import { WriteArea } from "./components/WriteArea.jsx"
import { Controlls } from "./components/Controlls.jsx"
import { Stats } from "./components/Stats.jsx"
import { LetterDensity } from "./components/LetterDensity.jsx"
import { ThemeContext } from "./context/ThemeContext.jsx"

const App = () => {
  const [text, setText] = useState(
    "Esto es un texto de prueba, puedes borrarlo, modificarlo o comprobar que la app esta funcionando correctamente."
  )

  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const [limitCharacter, setLimitCharacter] = useState(false)
  const [limitValue, setLimitValue] = useState(10)

  const { dark, handleDarkTheme } = useContext(ThemeContext)

  const handleExcludeSpaces = () => {
    setExcludeSpaces(!excludeSpaces)
  }

  const handleLimitValue = (value) => {
    setLimitValue(Number(value))
  }

  const handleChangeTextarea = (e) => {
    const value = e.target.value

    if (limitCharacter) {
      setText(value.slice(0, limitValue))
    } else {
      setText(value)
    }
  }

  const handleChangeInputLimit = () => {
    const newLimitCharacter = !limitCharacter

    setLimitCharacter(newLimitCharacter)

    if (newLimitCharacter) {
      setText(text.slice(0, limitValue))
    }
  }

  const characters = excludeSpaces
    ? text.replace(/\s/g, "").length
    : text.length

  const words =
    text.trim() === ""
      ? 0
      : text.trim().split(/\s+/).length

  const sentences =
    text.trim() === ""
      ? 0
      : text
          .split(/[.!?]/)
          .filter((sentence) => sentence.trim() !== "")
          .length

  const readingTime = Math.ceil(words / 180)

  const cleanText = text
    .toLowerCase()
    .replace(/[^a-záéíóúüñ]/g, "")

  const total = cleanText.length

  const dictionaryLetters = {}

  cleanText.split("").forEach((letter) => {
    dictionaryLetters[letter] =
      (dictionaryLetters[letter] || 0) + 1
  })

  const letters = Object.entries(dictionaryLetters).map(
    ([letter, amount]) => ({
      letterName: letter,
      amount,
      percentage: total === 0 ? 0 : (amount / total) * 100,
    })
  )

  const sortLetters = letters.sort(
    (a, b) => b.amount - a.amount
  )

  return (
    <main className={dark ? "dark-theme" : ""}>
      <Header
        dark={dark}
        handleDarkTheme={handleDarkTheme}
      />

      <h2 className="main-title">
        Analyze your text
        <br />
        in real-time.
      </h2>

      <WriteArea
        handleChangeTextarea={handleChangeTextarea}
        text={text}
      />

      <Controlls
        excludeSpaces={excludeSpaces}
        handleExcludeSpaces={handleExcludeSpaces}
        limitCharacter={limitCharacter}
        handleChangeInputLimit={handleChangeInputLimit}
        limitValue={limitValue}
        handleLimitValue={handleLimitValue}
      />

      <Stats
        characters={characters}
        words={words}
        sentences={sentences}
        readingTime={readingTime}
      />

      {text && (
        <LetterDensity sortLetters={sortLetters} />
      )}
    </main>
  )
}

export { App }