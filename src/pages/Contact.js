import React, { useState } from 'react'
import axios from 'axios';
import { PAPATOO_BASEURL, PAPATOO_V1_CLIENTS } from '../utils/constants/apiConfig';
import { isContactFormValid } from '../utils/helpers/validators';

function Contact() {
  const [isSent, setIsSent] = useState(false)
  const startTime = new Date()

  const handleSubmit = (e) => {
    e.preventDefault()
    const submitTime = new Date()
    if (!isContactFormValid(e.target)) return;
    const formData = { // not using new formData object until BE refactor - specifically for integer parsing
      submission: {
        name: e.target.email.value,
        email: e.target.email.value,
        message: e.target.message.value,
        start_time: startTime.getTime(),
        submit_time: submitTime.getTime(),
        website: process.env.REACT_APP_WEBSITE_KEY
      }
    }
    sendFormData(formData)
    setIsSent(true)
    toggleIsSent()
  }

  const toggleIsSent = () => {
    setTimeout(() => {
      setIsSent(false)
    }, 10000)
  }

  const sendFormData = (formData) => {
    axios.post(
      `${PAPATOO_BASEURL}${PAPATOO_V1_CLIENTS}/contact_form_submission`,
      formData
    ).then(data => console.log(data))
      .catch(error => console.log(error))
  }

  return (
    <main>
      <section className='section text-container'>
        <form id='pam-contact-form' className='contact-form' onSubmit={handleSubmit}>
          <p>Get in touch and start a conversation with me using the form below.</p>
          <input className='form-input' id='contactEmail' type='text' name='email' placeholder='your.email@address.com' required />
          <label className='form-input-label' htmlFor='contactEmail'>your email address</label>
          <input className='form-input' id='contactSubject' type='text' name='subject' placeholder='subject' required />
          <label className='form-input-label' htmlFor="contactSubject">add a subject</label>
          <textarea className='form-input form-message' id='contactMessage' type='text' name='message' placeholder='your message here' required />
          <label className='form-input-label' htmlFor='contactMessage'>your message</label>
          <div id='companny'>
            <label htmlFor='companny'><p>company</p></label>
            <input type='text' name='companny' placeholder='Universal' autoComplete='nope' />
          </div>
          <button type='submit' className='toggle-details-btn'>Send</button>
          {isSent && <span><small>message sent!</small></span>}
        </form>
      </section>
    </main>

  )
}

export default Contact