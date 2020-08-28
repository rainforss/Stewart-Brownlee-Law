import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import routerStyles from "./routerLink.module.scss"

const RouterLink = ({ linkUrl, linkText }) => {
  return (
    <div className={routerStyles.routerWrap}>
      <div className={routerStyles.routerInner}>
        <div className={routerStyles.linkWrap}>
          <AniLink paintDrip hex="#418041" to={linkUrl}>
            {linkText}
          </AniLink>
        </div>
        <div className={routerStyles.underlineOutter}>
          <div className={routerStyles.underlineInner}>
            <div className={routerStyles.front}></div>
            <div className={routerStyles.back}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RouterLink
