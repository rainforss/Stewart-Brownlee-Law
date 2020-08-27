import React, { useState } from "react"
import Layout from "../components/layout"
import Head from "../components/common/head"
import contactStyles from "../styles/contact.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import Form from "../components/common/form"

const ContactPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const onMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }
  const [showMap, setShowMap] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    nameError: "",
    email: "",
    emailError: "",
    subject: "",
    message: "",
    messageError: "",
  })

  const validate = () => {
    let isError = false
    const errors = {}
    if (formData.name.trim().length === 0) {
      isError = true
      errors.nameError = "Name cannot be blank"
    }
    if (!formData.email.includes("@")) {
      isError = true
      errors.emailError = "Email needs to have a valid format"
    }
    if (formData.message.trim().length === 0) {
      isError = true
      errors.messageError = "Message cannot be blank"
    }
    if (isError) {
      setFormData({ ...formData, ...errors })
    }
    return isError
  }
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    const err = validate()
    if (!err) {
      setFormData({
        name: "",
        nameError: "",
        email: "",
        emailError: "",
        subject: "",
        message: "",
        messageError: "",
      })
    }
  }

  const data = useStaticQuery(graphql`
    query {
      staticMap {
        center
        mapUrl
        childFile {
          publicURL
        }
      }
    }
  `)

  return (
    <>
      <Layout menuOpen={menuOpen} onMenuToggle={onMenuToggle}>
        <Head title="Contact" />
        <div className={contactStyles.pageWrap}>
          <div className={contactStyles.background}>
            <div className={contactStyles.overlayLeft}></div>
            <div className={contactStyles.overlayRight}></div>
          </div>
          <div className={contactStyles.content}>
            <div className={contactStyles.contentWrap}>
              <div
                className={
                  contactStyles.googleMap +
                  " " +
                  (showMap ? contactStyles.active : contactStyles.inactive)
                }
              >
                <img
                  src={data.staticMap.childFile.publicURL}
                  alt="Location"
                  className={contactStyles.map}
                />
                <a href={data.staticMap.mapUrl}>
                  <span>Get directions</span>
                </a>
              </div>
              <div
                className={
                  contactStyles.contactForm +
                  " " +
                  (showMap ? contactStyles.inactive : contactStyles.active)
                }
              >
                <div className={contactStyles.form}>
                  <Form
                    message={formData.message}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    formData={formData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ContactPage
