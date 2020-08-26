import React, { useState, useEffect, useRef } from "react"
import sliderStyles from "./textSlider.module.scss"

function TextSlider({ textHeading, textBody, isLink, urls }) {
  const [currentSlide, setCurrentSlide] = useState(1)
  const sliderRef = useRef()

  const match = currentSlide - 1
  useEffect(() => {
    sliderRef.current.classList.remove(sliderStyles.animated)
    window.requestAnimationFrame(function (time) {
      window.requestAnimationFrame(function (time) {
        sliderRef.current.classList.add(sliderStyles.animated)
      })
    })
    const rollSlides = setTimeout(() => {
      currentSlide === 3
        ? setCurrentSlide(1)
        : setCurrentSlide(currentSlide + 1)
    }, 4000)
    return () => {
      clearTimeout(rollSlides)
    }
  }, [currentSlide])

  return (
    <div className={sliderStyles.textSlider}>
      <div className={sliderStyles.underlineOutter}>
        <div className={sliderStyles.underlineInner}>
          <div ref={sliderRef} className={sliderStyles.front}></div>
          <div className={sliderStyles.back}></div>
        </div>
      </div>
      <div className={sliderStyles.textSliderInner}>
        <div className={sliderStyles.textHead}>
          <div className={sliderStyles.txt}>
            <span>{textHeading}</span>
          </div>
        </div>
        <div className={sliderStyles.textBody}>
          {textBody.map((text, index) => {
            return (
              <div
                key={text}
                className={
                  sliderStyles.txt +
                  " " +
                  (index === match ? sliderStyles.active : "")
                }
              >
                {isLink ? (
                  <a
                    href={urls[index]}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {text}
                  </a>
                ) : (
                  <span>{text}</span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TextSlider
