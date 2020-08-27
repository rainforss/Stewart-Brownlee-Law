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
    >
      <input type="hidden" name="form-name" value="contact" />
      <label className={formStyles.formArea}>
        Your name:
        <input type="text" name="name" />
        {/* <span className={formStyles.error}>{formData.nameError}</span> */}
      </label>
      <label className={formStyles.formArea}>
        Your email:
        <input type="text" name="email" />
        {/* <span className={formStyles.error}>{formData.emailError}</span> */}
      </label>
      <label className={formStyles.formArea}>
        Subject:
        <input type="text" name="subject" />
      </label>
      <label className={formStyles.formArea}>
        Your message:
        <textarea name="message" rows="10" cols="60" />
        {/* <span className={formStyles.error}>{formData.messageError}</span> */}
      </label>

      <button type="submit">SEND REQUEST</button>
    </form>
  )
}
export default Form
