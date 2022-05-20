import React from 'react'

const handleSubmit = (e)=>{
  e.preventDefault()
  console.log(e.target.contactEmail.value + ' sent and email with the following subject ' + e.target.contactSubject.value + ' and this message ' + e.target.contactMessage.value);
}

function Contact() {
  return (
    <section>
      <form className='contact-form' onSubmit={handleSubmit}>
        <input className='form-input' id='contactEmail' type='text' placeholder='your.email@address.com' required/>
        <input className='form-input' id='contactSubject' type='text' placeholder='subject' required/>
        <textarea className='form-input form-message' id='contactMessage' type='text' placeholder='your message here.' required/>
        <button type='submit' className='toggle-details-btn'>Send</button>
      </form>
    </section>
  )
}

export default Contact