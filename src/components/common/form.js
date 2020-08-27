import React from "react"
import formStyles from "./form.module.scss"

const Form = ({
  handleChange,

  handleSubmit,

  formData,
}) => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
      onSubmit={handleSubmit}
      className={formStyles.form}
    >
      <label className={formStyles.formArea}>
        Your name:
        <input
          type="text"
          value={formData.name}
          onChange={handleChange}
          name="name"
        />
        <span className={formStyles.error}>{formData.nameError}</span>
      </label>
      <label className={formStyles.formArea}>
        Your email:
        <input
          type="text"
          value={formData.email}
          onChange={handleChange}
          name="email"
        />
        <span className={formStyles.error}>{formData.emailError}</span>
      </label>
      <label className={formStyles.formArea}>
        Subject:
        <input
          type="text"
          value={formData.subject}
          onChange={handleChange}
          name="subject"
        />
      </label>
      <label className={formStyles.formArea}>
        Your message:
        <textarea
          value={formData.message}
          onChange={handleChange}
          name="message"
          rows="10"
          cols="60"
        />
        <span className={formStyles.error}>{formData.messageError}</span>
      </label>
      <input type="hidden" name="contact" value="contact" />
      <div data-netlify-recaptcha="true"></div>

      <button type="submit">SEND REQUEST</button>
    </form>
  )
}
export default Form
