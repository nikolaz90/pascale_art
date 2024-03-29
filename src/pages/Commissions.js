import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import screenImage from '../photos/comissions/img1.jpg'
import flowerImage from '../photos/comissions/img2.jpg'

function Commissions() {
  const [currWidth, setCurrWidth] = useState(document.documentElement.clientWidth)
  window.addEventListener('resize', getWidth)
  
  function getWidth (){
    setCurrWidth(document.documentElement.clientWidth)
  }

  return (
    <main>
      <section className='section commissions-section text-container'>
        <h2 className='page-title'>Commissions</h2>
        <p>
          Commissioned work is always an eye opening experience as I incorporate your requirements, desires and requests into the artwork.
          Would you like something totally unique, or more of what you know you already like? I am more than happy to share ideas and discuss whatever it 
          is that I could create for you. Whether it is for a gift to someone, to decorate a special home or an interesting place of business.
          I have completed commissions of screens, murals and paintings for residences and galleries in different cities in the UK but also 
          Milan, Brussels and Paris. 
        </p>
        <div className='commissions-info'>
          <p className='commissions-info-para'>The photo {currWidth > 766 ? 'on the right' : 'below'}  is an example of a screen being used in place of blinds or curtains in a first floor dining room.</p>
          <img src={screenImage} alt='display of a screen painted by Pascale Stacey'/>
        </div>
        <div className='commissions-info second-para'>
          <img src={flowerImage} alt='details of a painting of a flower' className='commissions-flower-img'/>
          <p className='commissions-info-para'>
            I have just returned from Umbria in Italy where I painted two murals in a restored tower as the artist in residence.  
            The flower {currWidth > 725 ? 'shown here':'below'} is a detail of the work in one of the rooms.
            If you'd like to talk through some ideas for your own screen or  mural, please send me your contact details using <Link to='/contact' className='commission-contact-link'><u>this</u></Link> form.
            I look forward to hearing from you!   
          </p>
        </div>
      </section>
    </main>
    
  )
}

export default Commissions