import React, { useState, setGlobal } from "reactn"
import Layout from "../components/layout"
import homeStyles from "../styles/index.module.scss"
import RouterLink from "../components/common/routerLink"
import TextSlider from "../components/common/textSlider"
import Head from "../components/common/head"

setGlobal({ firstIndex: 0, secondIndex: 1 })

const IndexPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const onMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <Layout onMenuToggle={onMenuToggle} menuOpen={menuOpen}>
        <Head title="Home" />
        <section className={homeStyles.hero}></section>
        <div className={homeStyles.overlay}>
          <h2 className={homeStyles.siteIntro}>
            Alberta Law Firm Based in North Edmonton
          </h2>
          <div className={homeStyles.sliderWrap}>
            <TextSlider
              textHeading="Focusing on"
              textBody={[
                "Probate Litigation & Wills",
                "Insurance Litigation & Coverage",
                "Injury Litigation & Negligence",
                "Small Claims Guidance",
                "Insolvency Litigation",
                "Much More",
              ]}
              isLink={false}
            />
          </div>
        </div>
        <section className={homeStyles.banner}>
          <div className={homeStyles.cta}>
            <div
              className={
                homeStyles.ctaText +
                " " +
                (menuOpen ? homeStyles.ctaTextLeft : homeStyles.ctaTextRight)
              }
            >
              <h2>YOUR MOST IMPORTANT CASES</h2>
              <div className={homeStyles.button}>
                <RouterLink
                  linkUrl="/contact"
                  linkText="Consultation Request"
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default IndexPage
