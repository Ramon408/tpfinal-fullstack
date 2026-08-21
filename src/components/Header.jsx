import { useState } from "react"
import logo from "../assets/images/logo.png"

const Header = ({ dark, handleDarkTheme }) => {
  return (
    <header className="header">
      <div className="brand">
        <img
          src={logo}
          alt="Logo Character Counter"
          className="brand-logo"
        />

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