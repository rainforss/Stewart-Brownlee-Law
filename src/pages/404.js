import React, { useState } from "react"

import Layout from "../components/layout"
import notFoundStyles from "../styles/404.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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

          <AniLink paintDrip hex="#418041" to="/">
            <span>Head home</span>
          </AniLink>
        </div>
      </div>
    </Layout>
  )
}

export default NotFound
