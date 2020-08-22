import React, { useState, useGlobal } from "reactn"
import Layout from "../components/layout"
import serviceStyles from "../styles/service.module.scss"
import Grid from "../components/common/grid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import Head from "../components/common/head"
import RouterLink from "../components/common/routerLink"

const ServicePage = () => {
  const services = [
    {
      head: "Probate Litigation & Wills",
      body:
        "The drafting of a will is a traditional lawyer’s art. The great number of ways land and personal property may pass through multiple generations makes the drafting of wills a considerable discipline. Proper drafting requires a mastery of the historical language of wills and the principles of will interpretation",
    },
    {
      head: "Insurance Litigation & Coverage",
      body:
        "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      head: "Injury Litigation & Negligence",
      body:
        "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      head: "Small Claims Guidance",
      body:
        "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      head: "Insolvency Litigation",
      body:
        "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      head: "Evidence Preservation & Injunctions",
      body:
        "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      head: "Matrimonial Property Litigation",
      body:
        "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      head: "Business Litigation",
      body:
        "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      head: "Real Estate Law",
      body:
        "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      head: "Civil Appeals",
      body:
        "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ]

  const [secondIndex, setSecondIndex] = useGlobal("secondIndex")
  const [firstIndex, setFirstIndex] = useGlobal("firstIndex")
  const [forward, SetForward] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const onMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }
  const nextSlide = () => {
    if (secondIndex >= services.length - 1) {
      setSecondIndex(0)
      setFirstIndex(firstIndex + 1)
    } else if (firstIndex >= services.length - 1) {
      setFirstIndex(0)
      setSecondIndex(secondIndex + 1)
    } else {
      setFirstIndex(firstIndex + 1)
      setSecondIndex(secondIndex + 1)
    }
    SetForward(true)
  }
  const prevSlide = () => {
    if (firstIndex <= 0) {
      setFirstIndex(services.length - 1)
      setSecondIndex(secondIndex - 1)
    } else if (secondIndex <= 0) {
      setFirstIndex(firstIndex - 1)
      setSecondIndex(services.length - 1)
    } else {
      setFirstIndex(firstIndex - 1)
      setSecondIndex(secondIndex - 1)
    }
    SetForward(false)
  }
  return (
    <>
      <Layout menuOpen={menuOpen} onMenuToggle={onMenuToggle}>
        <Head title="Services" />
        <Grid />
        <div className={serviceStyles.service}>
          <section className={serviceStyles.backgroundWrap}>
            <div className={serviceStyles.background}>
              <div className={serviceStyles.overlay}></div>
            </div>
          </section>
          <section className={serviceStyles.content}>
            <div className={serviceStyles.heading}>
              <h2>We do</h2>
            </div>
            <div className={serviceStyles.topSlide}>
              <div className={serviceStyles.slideWrap}>
                {services.map((item, index) => (
                  <div
                    key={item.head}
                    className={
                      forward
                        ? serviceStyles.slideForward +
                          " " +
                          (index === secondIndex
                            ? serviceStyles.slideForwardActive
                            : "")
                        : serviceStyles.slideReverse +
                          " " +
                          (index === secondIndex
                            ? serviceStyles.slideReverseActive
                            : "")
                    }
                  >
                    <h4 className={serviceStyles.head}>{item.head}</h4>
                    <p className={serviceStyles.body}>{item.body}</p>
                    <div className={serviceStyles.read}>
                      <RouterLink linkText="Read more" linkUrl="/blog" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={serviceStyles.botSlide}>
              <div className={serviceStyles.slideWrap}>
                {services.map((item, index) => (
                  <div
                    key={item.head}
                    id={item.head}
                    className={
                      forward
                        ? serviceStyles.slideForward +
                          " " +
                          (index === firstIndex
                            ? serviceStyles.slideForwardActive
                            : "")
                        : serviceStyles.slideReverse +
                          " " +
                          (index === firstIndex
                            ? serviceStyles.slideReverseActive
                            : "")
                    }
                  >
                    <h4 className={serviceStyles.head}>{item.head}</h4>
                    <p className={serviceStyles.body}>{item.body}</p>
                    <div className={serviceStyles.read}>
                      <RouterLink linkText="Read more" linkUrl="/blog" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={serviceStyles.controls}>
              <div className={serviceStyles.controlButton}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  onClick={nextSlide}
                  className={serviceStyles.button}
                />
                <FontAwesomeIcon
                  icon={faChevronRight}
                  onClick={prevSlide}
                  className={serviceStyles.button}
                />
              </div>
            </div>
            <div className={serviceStyles.siteLink}>
              <div className={serviceStyles.link}>
                <RouterLink linkUrl="/contact" linkText="Inquiries" />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default ServicePage
