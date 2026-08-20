const Stats = ({ characters, words, sentences, readingTime }) => {
  return (
    <div>
      <p>Cantidad de caracteres: {characters}</p>
      <p>Cantidad de palabras: {words}</p>
      <p>Cantidad de oraciones: {sentences}</p>
      <p>Tiempo de lectura: ~{readingTime} min</p>
    </div>
  )
}

export { Stats }