import React, { useState } from 'react'
import axios from 'axios';
import { PAPATOO_BASEURL, PAPATOO_V1_CLIENTS } from '../utils/constants/apiConfig';

function Contact() {
  const [isSent, setIsSent] = useState(false)
  const startTime = new Date()

  const handleSubmit = (e) => {
    e.preventDefault()
    const submitTime = new Date()
    const formData = new FormData(e.target)
    formData.append('name', formData.get('email'))
    formData.append('start_time', startTime.getTime())
    formData.append('submit_time', submitTime.getTime())
    formData.append('website', process.env.REACT_APP_WEBSITE_KEY)
    const formEntries = Object.fromEntries(formData.entries())
    sendFormData(formEntries)
    setIsSent(true)
    toggleIsSent()
  }

  const toggleIsSent = () => {
    setTimeout(() => {
      setIsSent(false)
    }, 10000)
  }

  const sendFormData = (formEntries) => {
    const submissionData = { submission: formEntries }
    console.log(submissionData);
    axios.post(
      `${PAPATOO_BASEURL}${PAPATOO_V1_CLIENTS}/contact_form_submission`,
      formEntries
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
          <button type='submit' className='toggle-details-btn'>Send</button>
          {isSent && <span><small>message sent!</small></span>}
        </form>
      </section>
    </main>

  )
}

export default Contact