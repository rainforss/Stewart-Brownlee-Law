import React, { useState } from "react"
import Layout from "../components/layout"
import aboutStyles from "../styles/about.module.scss"
import TextSlider from "../components/common/textSlider"
import profile from "../assets/pngs/profile.png"
import RouterLink from "../components/common/routerLink"
import Head from "../components/common/head"

const AboutPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const onMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <Layout menuOpen={menuOpen} onMenuToggle={onMenuToggle}>
        <Head title="About" />
        <div className={aboutStyles.background}></div>
        <section className={aboutStyles.overlay}>
          <div className={aboutStyles.rightHalf}></div>
          <div className={aboutStyles.testamonials}>
            <div
              className={
                aboutStyles.sliderWrap +
                " " +
                (menuOpen
                  ? aboutStyles.sliderWrapLeft
                  : aboutStyles.sliderWrapRight)
              }
            >
              <TextSlider
                isLink={false}
                textHeading="They say"
                textBody={[
                  "I was very happy working with Stewart.  I definitely recommend looking into his services.",
                  "I had an excellent experience at Stewart Brownlee Law. Stewart's attention to detail and persistence lead to a successful conclusion of my case",
                  "Positive: Professionalism, Responsiveness",
                ]}
              />
            </div>
          </div>
          <div className={aboutStyles.aboutHeading}>
            <h2
              className={
                aboutStyles.heading +
                " " +
                (menuOpen ? aboutStyles.headingLeft : aboutStyles.headingRight)
              }
              datatext="ABOUT US"
            >
              ABOUT US
            </h2>
          </div>
          <div className={aboutStyles.aboutOwner}>
            <div className={aboutStyles.owner}>
              <div className={aboutStyles.ownerInner}>
                <div className={aboutStyles.cardFront}>
                  <img
                    src={profile}
                    alt="profile"
                    className={aboutStyles.profilePic}
                  />
                  <h4>Stewart Brownlee ......</h4>
                </div>
                <div className={aboutStyles.cardBack}></div>
              </div>
            </div>
          </div>
          <div className={aboutStyles.contactLink}>
            <div className={aboutStyles.button}>
              <RouterLink linkText="Get in touch" linkUrl="/contact" />
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default AboutPage
