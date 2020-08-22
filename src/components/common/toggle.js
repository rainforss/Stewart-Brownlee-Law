import React from "react"
import toggleStyles from "./toggle.module.scss"

function MenuToggle({ menuOpen, onMenuToggle, toggleDisable }) {
  return (
    <div
      className={
        toggleStyles.menuToggle + " " + (menuOpen ? toggleStyles.toggleOn : "")
      }
      onClick={toggleDisable ? undefined : onMenuToggle}
    >
      <div className={toggleStyles.toggleButton}>
        <div className={toggleStyles.line1}></div>
        <div className={toggleStyles.line2}></div>
        <div className={toggleStyles.line3}></div>
      </div>
    </div>
  )
}

export default MenuToggle
