import React, { useState } from "react"
import Layout from "../components/layout"
import Head from "../components/common/head"
import contactStyles from "../styles/contact.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import Form from "../components/common/form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons"

const ContactPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const onMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }
  const [showContact, setShowContact] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    nameError: "",
    email: "",
    emailError: "",
    subject: "",
    message: "",
    messageError: "",
  })
  const encode = data =>
    Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")

  const validate = () => {
    let isError = false
    const errors = {}
    if (formData.name.trim().length === 0) {
      isError = true
      errors.nameError = "Name cannot be blank"
    } else {
      isError = false
      errors.nameError = ""
    }
    if (!formData.email.includes("@")) {
      isError = true
      errors.emailError = "Email needs to have a valid format"
    } else {
      isError = false
      errors.emailError = ""
    }
    if (formData.message.trim().length === 0) {
      isError = true
      errors.messageError = "Message cannot be blank"
    } else {
      isError = false
      errors.messageError = ""
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
    const form = e.target
    const err = validate()
    if (!err) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: formData.subject,
        }),
      })
        .then(() => alert("Sucess!"))
        .catch(error => alert(error))
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
                  (showContact ? contactStyles.active : contactStyles.inactive)
                }
              >
                <img
                  src={data.staticMap.childFile.publicURL}
                  alt="Location"
                  className={contactStyles.map}
                />
                <div className={contactStyles.mapOverlay}>
                  <div className={contactStyles.wrap}>
                    <div className={contactStyles.contactInfo}>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{
                          marginRight: "15px",
                          color: "rgb(65, 128, 65)",
                        }}
                      ></FontAwesomeIcon>
                      <a href="mailto:info@stewartbrownleelaw.com">
                        info@stewartbrownleelaw.com
                      </a>
                    </div>
                    <div className={contactStyles.contactInfo}>
                      <FontAwesomeIcon
                        icon={faPhone}
                        style={{
                          marginRight: "15px",
                          color: "rgb(65, 128, 65)",
                        }}
                      ></FontAwesomeIcon>
                      <a href="tel:780-800-5511">(780) 800-5511</a>
                    </div>
                    <div className={contactStyles.contactInfo}>
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        style={{
                          marginRight: "15px",
                          color: "rgb(65, 128, 65)",
                        }}
                      ></FontAwesomeIcon>
                      <a
                        href={data.staticMap.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        15379 Castle Downs Rd NW, Edmonton, AB T5X 3Y7
                      </a>
                    </div>
                    <div className={contactStyles.contactInfo}>
                      <FontAwesomeIcon
                        icon={faClock}
                        style={{
                          marginRight: "15px",
                          color: "rgb(65, 128, 65)",
                        }}
                      ></FontAwesomeIcon>
                      <span>Mon - Fri, 9AM - 5PM</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  contactStyles.contactForm +
                  " " +
                  (showContact ? contactStyles.inactive : contactStyles.active)
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
            <div className={contactStyles.control}>
              <div
                className={contactStyles.showContact}
                onClick={() => setShowContact(!showContact)}
              >
                <div
                  className={
                    showContact ? contactStyles.inactive : contactStyles.active
                  }
                >
                  <span>Contact Info</span>
                </div>
                <div
                  className={
                    showContact ? contactStyles.active : contactStyles.inactive
                  }
                >
                  <span>Request</span>
                </div>
                <div className={contactStyles.underlineOutter}>
                  <div className={contactStyles.underlineInner}>
                    <div className={contactStyles.front}></div>
                    <div className={contactStyles.back}></div>
                  </div>
                </div>
              </div>
              <div className={contactStyles.directions}>
                <a
                  href={data.staticMap.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={contactStyles.link}
                >
                  <span>Directions</span>
                </a>
                <div className={contactStyles.underlineOutter}>
                  <div className={contactStyles.underlineInner}>
                    <div className={contactStyles.front}></div>
                    <div className={contactStyles.back}></div>
                  </div>
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
