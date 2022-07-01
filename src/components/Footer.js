import React from 'react'
import { Link } from 'react-router-dom'
import  email  from '../photos/logos/envelope-solid.svg'
import instagram from '../photos/logos/instagram-brands.svg'

function Footer() {
  return (
    <footer className='footer-section'>
      <p>Pascale Stacey</p>
      <p><small>COPYRIGHT {new Date().getFullYear()}</small></p>
      <div>
        <Link to='/contact'><img src={email} alt='email me' className='footer-icon'/></Link>
        <a target='_blank' rel='noreferrer' href='https://www.instagram.com/pascalestacey/'><img src={instagram} alt='follow me on instagram' className='footer-icon'/></a>
      </div>
      
    </footer>
  )
}

export default Footer