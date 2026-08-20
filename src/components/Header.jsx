import { useState } from "react"

const Header = ({ dark, handleDarkTheme }) => {
  return <header>
    <div>
      <p>C</p>
      <h1>Character Counter UTN</h1>
    </div>
    <button onClick={() => handleDarkTheme(!dark)}>☀</button>
  </header>
}

export { Header }