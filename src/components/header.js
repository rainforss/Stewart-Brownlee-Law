import React, { useRef, useGlobal } from "reactn"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"
import logo from "../assets/svgs/logo.svg"

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
          <img src={logo} className={headerStyles.headerLogo} />
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
          <Link to="/" className={headerStyles.link}>
            <span>HOME</span>
          </Link>
        </li>
        <li className={headerStyles.navItem}>
          <Link to="/about" className={headerStyles.link}>
            <span>ABOUT</span>
          </Link>
        </li>
        <li
          className={headerStyles.navItem}
          name="services"
          // onMouseEnter={moveIn}
          // onMouseLeave={moveOut}
        >
          <Link
            to="/services"
            className={headerStyles.link}
            onClick={() => {
              setFirstIndex(0)
              setSecondIndex(1)
            }}
          >
            <span>SERVICES</span>
          </Link>
          <div ref={serviceSubMenu} className={headerStyles.subMenu}>
            <Link
              to="/services"
              onClick={() => {
                setFirstIndex(0)
                setSecondIndex(1)
              }}
            >
              Probate Litigation & Wills
            </Link>
            <Link
              to="/services"
              onClick={() => {
                setFirstIndex(1)
                setSecondIndex(2)
              }}
            >
              Insurance Litigation & Coverage
            </Link>
            <Link
              to="/services"
              onClick={() => {
                setFirstIndex(2)
                setSecondIndex(3)
              }}
            >
              Injury Litigation & Negligence
            </Link>
            <Link
              to="/services"
              onClick={() => {
                setFirstIndex(4)
                setSecondIndex(5)
              }}
            >
              Insolvency Litigation
            </Link>
            <Link
              to="/services"
              onClick={() => {
                setFirstIndex(3)
                setSecondIndex(4)
              }}
            >
              Small Claims Guidance
            </Link>
          </div>
        </li>
        <li
          className={headerStyles.navItem}
          name="blog"
          // onMouseEnter={moveIn}
          // onMouseLeave={moveOut}
        >
          <Link to="/blog" className={headerStyles.link}>
            <span>KNOWLEDGE CENTER</span>
          </Link>
          <div ref={blogSubMenu} className={headerStyles.subMenu}>
            <a href="">Publications</a>
            <a href="">Probate Map</a>
            <a href="">Science & Law</a>
            <a href="">Evidence & Experts</a>
          </div>
        </li>
        <li className={headerStyles.navItem}>
          <Link to="/contact" className={headerStyles.link}>
            <span>CONTACT</span>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Header
