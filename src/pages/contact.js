import React, { useState } from "react"
import Layout from "../components/layout"
import Head from "../components/common/head"

const ContactPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const onMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <Layout menuOpen={menuOpen} onMenuToggle={onMenuToggle}>
        <Head title="Contact" />
      </Layout>
    </>
  )
}

export default ContactPage
