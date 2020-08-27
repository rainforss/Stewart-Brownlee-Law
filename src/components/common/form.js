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
      className={formStyles.form}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <label className={formStyles.formArea}>
        Your name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <span className={formStyles.error}>{formData.nameError}</span>
      </label>
      <label className={formStyles.formArea}>
        Your email:
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <span className={formStyles.error}>{formData.emailError}</span>
      </label>
      <label className={formStyles.formArea}>
        Subject:
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </label>
      <label className={formStyles.formArea}>
        Your message:
        <textarea
          name="message"
          rows="10"
          cols="60"
          value={formData.message}
          onChange={handleChange}
        />
        <span className={formStyles.error}>{formData.messageError}</span>
      </label>

      <button type="submit">SEND REQUEST</button>
    </form>
  )
}
export default Form
