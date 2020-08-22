import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import notFoundStyles from "../styles/404.module.scss"

const NotFound = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const onMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <Layout menuOpen={menuOpen} onMenuToggle={onMenuToggle}>
      <div className={notFoundStyles.pageWrap}>
        <div className={notFoundStyles.notice}>
          <h1>Page Not Found</h1>

          <Link to="/">Head home</Link>
        </div>
      </div>
    </Layout>
  )
}

export default NotFound
