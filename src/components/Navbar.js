import React from 'react'
import {useGlobalContext} from '../context'
import { Link } from 'react-router-dom';

function Navbar() {
  const {loading} = useGlobalContext()

  return (
    <nav className='navbar'>
      <h1 className='nav-title'>Pascale Stacey . Art</h1>
      <ul className='nav-link-container'>
        <li className='nav-link'>Paintings</li>
        <li className='nav-link'>Screens</li>
        <li className='nav-link'>Prints</li>
        <li className='nav-link'>Comissions</li>
        <li className='nav-link'>About</li>
        <li className='nav-link'>Testimonials</li>
        <li className='nav-link'>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar