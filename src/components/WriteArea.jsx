const WriteArea = ({ handleChangeTextarea, text }) => {
  return (
    <section className="write-area">
      <textarea
        placeholder="Escribe tu texto..."
        onChange={handleChangeTextarea}
        value={text}
      />
    </section>
  )
}

export { WriteArea }