import React, { useRef, useGlobal } from "reactn"
import headerStyles from "./header.module.scss"
import logo from "../assets/svgs/logo.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import MenuToggle from "./common/toggle"

const Header = ({ menuOpen, onMenuToggle }) => {
  const serviceSubMenu = useRef()
  const blogSubMenu = useRef()
  const [secondIndex, setSecondIndex] = useGlobal("secondIndex")
  const [firstIndex, setFirstIndex] = useGlobal("firstIndex")

  return (
    <>
      <div className={headerStyles.navWrap}>
        <nav className={headerStyles.nav}>
          <AniLink paintDrip hex="#418041" to="/">
            <img src={logo} className={headerStyles.headerLogo} />
          </AniLink>
        </nav>
      </div>
      <MenuToggle
        onMenuToggle={onMenuToggle}
        toggleDisable={false}
        menuOpen={menuOpen}
      />
      <ul
        className={
          headerStyles.navList +
          " " +
          (menuOpen ? headerStyles.navListOn : headerStyles.navListOff)
        }
      >
        <li className={headerStyles.navItem}>
          <AniLink paintDrip hex="#418041" to="/" className={headerStyles.link}>
            <span>HOME</span>
          </AniLink>
        </li>
        <li className={headerStyles.navItem}>
          <AniLink
            paintDrip
            hex="#418041"
            to="/about"
            className={headerStyles.link}
          >
            <span>ABOUT</span>
          </AniLink>
        </li>
        <li
          className={headerStyles.navItem}
          name="services"
          // onMouseEnter={moveIn}
          // onMouseLeave={moveOut}
        >
          <AniLink
            paintDrip
            hex="#418041"
            to="/services"
            className={headerStyles.link}
            onClick={() => {
              setFirstIndex(0)
              setSecondIndex(1)
            }}
          >
            <span>SERVICES</span>
          </AniLink>
          <div ref={serviceSubMenu} className={headerStyles.subMenu}>
            <AniLink
              paintDrip
              hex="#418041"
              to="/services"
              onClick={() => {
                setFirstIndex(0)
                setSecondIndex(1)
              }}
            >
              Probate Litigation & Wills
            </AniLink>
            <AniLink
              paintDrip
              hex="#418041"
              to="/services"
              onClick={() => {
                setFirstIndex(1)
                setSecondIndex(2)
              }}
            >
              Insurance Litigation & Coverage
            </AniLink>
            <AniLink
              paintDrip
              hex="#418041"
              to="/services"
              onClick={() => {
                setFirstIndex(2)
                setSecondIndex(3)
              }}
            >
              Injury Litigation & Negligence
            </AniLink>
            <AniLink
              paintDrip
              hex="#418041"
              to="/services"
              onClick={() => {
                setFirstIndex(4)
                setSecondIndex(5)
              }}
            >
              Insolvency Litigation
            </AniLink>
            <AniLink
              paintDrip
              hex="#418041"
              to="/services"
              onClick={() => {
                setFirstIndex(3)
                setSecondIndex(4)
              }}
            >
              Small Claims Guidance
            </AniLink>
          </div>
        </li>
        <li
          className={headerStyles.navItem}
          name="blog"
          // onMouseEnter={moveIn}
          // onMouseLeave={moveOut}
        >
          <AniLink
            paintDrip
            hex="#418041"
            to="/blog"
            className={headerStyles.link}
          >
            <span>KNOWLEDGE CENTER</span>
          </AniLink>
          <div ref={blogSubMenu} className={headerStyles.subMenu}>
            <AniLink paintDrip hex="#418041" to="/blog">
              Publications
            </AniLink>
            <AniLink paintDrip hex="#418041" to="/blog">
              Probate Map
            </AniLink>
            <AniLink paintDrip hex="#418041" to="/blog">
              Science & Law
            </AniLink>
            <AniLink paintDrip hex="#418041" to="/blog">
              Evidence & Experts
            </AniLink>
          </div>
        </li>
        <li className={headerStyles.navItem}>
          <AniLink
            paintDrip
            hex="#418041"
            to="/contact"
            className={headerStyles.link}
          >
            <span>CONTACT</span>
          </AniLink>
        </li>
      </ul>
    </>
  )
}

export default Header
