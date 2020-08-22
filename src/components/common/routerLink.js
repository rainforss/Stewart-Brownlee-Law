import React from "react"
import { Link } from "gatsby"
import routerStyles from "./routerLink.module.scss"

const RouterLink = ({ linkUrl, linkText }) => {
  return (
    <div className={routerStyles.routerWrap}>
      <div className={routerStyles.routerInner}>
        <div className={routerStyles.linkWrap}>
          <Link to={linkUrl}>{linkText}</Link>
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
