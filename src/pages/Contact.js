import React, {useState} from 'react'



function Contact() {
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (e)=>{
    //e.preventDefault()
    console.log('You have sent the following email sucessfully : subject ' + e.target.contactSubject.value + ', message : ' + e.target.contactMessage.value)
    setIsSent(true)
    toggleIsSent()
  }

  const toggleIsSent = ()=>{
    setTimeout(()=>{
      setIsSent(false)
    }, 10000)  
  }

  return (
    <main>
      <section className='section text-container'>
        <form className='contact-form' onSubmit={handleSubmit} action='https://formsubmit.co/a4a24ec97848babda9703381c889c4b6' target='_blank' method='POST'>
          <p>Get in touch and start a conversation with me using the form below.</p>
          <input className='form-input' id='contactEmail' type='text' name='email' placeholder='your.email@address.com' required/>
          <label className='form-input-label' htmlFor='contactEmail'>your email address</label>
          <input className='form-input' id='contactSubject' type='text' name='subject' placeholder='subject' required/>
          <label className='form-input-label' htmlFor="contactSubject">add a subject</label>
          <textarea className='form-input form-message' id='contactMessage' type='text' name='message' placeholder='your message here' required/>
          <label className='form-input-label' htmlFor='contactMessage'>your message</label>
          <button type='submit' className='toggle-details-btn'>Send</button>
          {isSent && <span><small>message sent!</small></span>} 
        </form>
      </section>
    </main>
    
  )
}

export default Contact