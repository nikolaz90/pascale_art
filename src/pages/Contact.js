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
    <section>
      <form className='contact-form' onSubmit={handleSubmit} action='https://formsubmit.co/a4a24ec97848babda9703381c889c4b6' target='_blank' method='POST'>
        <input className='form-input' id='contactEmail' type='text' name='email' placeholder='your.email@address.com' required/>
        <input className='form-input' id='contactSubject' type='text' name='subject' placeholder='subject' required/>
        <textarea className='form-input form-message' id='contactMessage' type='text' name='message' placeholder='your message here.' required/>
        <button type='submit' className='toggle-details-btn'>Send</button>
        {isSent && <span><small>message sent!</small></span>} 
      </form>
    </section>
  )
}

export default Contact