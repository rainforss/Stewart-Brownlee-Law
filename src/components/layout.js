import React from "react"
import Header from "./header"

const Layout = ({ children, onMenuToggle, menuOpen }) => {
  return (
    <>
      <Header onMenuToggle={onMenuToggle} menuOpen={menuOpen} />
      {children}
    </>
  )
}

export default Layout
