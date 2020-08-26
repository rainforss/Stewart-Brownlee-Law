import React, { useState } from "react"
import Layout from "../components/layout"
import Head from "../components/common/head"
import contactStyles from "../styles/contact.module.scss"

const ContactPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const onMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <Layout menuOpen={menuOpen} onMenuToggle={onMenuToggle}>
        <Head title="Contact" />
        <div className={contactStyles.pageWrap}>
          <div className={contactStyles.background}>
            <div className={contactStyles.overlayLeft}></div>
            <div className={contactStyles.overlayRight}></div>
          </div>
          <div className={contactStyles.content}></div>
        </div>
      </Layout>
    </>
  )
}

export default ContactPage
