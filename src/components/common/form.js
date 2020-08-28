import React from "react"
import formStyles from "./form.module.scss"

const Form = ({
  handleChange,

  handleSubmit,

  formData,
}) => {
  return (
    <form
      method="POST"
      name="contact"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className={formStyles.form}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className={formStyles.hidden}>
        <label>
          Don't fill this out if you are human:<input name="bot-field"></input>
        </label>
      </p>
      <div className={formStyles.fieldWrap}>
        <label htmlFor="name" className={formStyles.formArea}>
          Your name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className={formData.name ? formStyles.active : ""}
        />
      </div>
      <span className={formStyles.error}>{formData.nameError}</span>
      <div className={formStyles.fieldWrap}>
        <label htmlFor="email" className={formStyles.formArea}>
          Your email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className={formData.email ? formStyles.active : ""}
        />
      </div>
      <span className={formStyles.error}>{formData.emailError}</span>
      <div className={formStyles.fieldWrap}>
        <label htmlFor="subject" className={formStyles.formArea}>
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          className={formData.subject ? formStyles.active : ""}
        />
      </div>
      <div className={formStyles.fieldWrap}>
        <label htmlFor="message" className={formStyles.formArea}>
          Your message
        </label>
        <input
          type="text"
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          className={formData.message ? formStyles.active : ""}
        />
      </div>
      <span className={formStyles.error}>{formData.messageError}</span>
      <div className={formStyles.buttonWrap}>
        <button className={formStyles.button} type="submit">
          Send request
        </button>
        <div className={formStyles.underlineOutter}>
          <div className={formStyles.underlineInner}>
            <div className={formStyles.front}></div>
            <div className={formStyles.back}></div>
          </div>
        </div>
      </div>
    </form>
  )
}
export default Form
