import { useState } from "react"

const Header = ({ dark, handleDarkTheme }) => {
  return (
    <header className="header">
      <div className="brand">
        <div className="brand-logo">C</div>
        <h1>Character Counter</h1>
      </div>

      <button
        className="theme-button"
        onClick={handleDarkTheme}
        aria-label="Cambiar tema"
      >
        {dark ? "☀" : "☾"}
      </button>
    </header>
  )
}

export { Header }