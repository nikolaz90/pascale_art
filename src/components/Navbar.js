import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  const overlay = useRef(null)

  const handleCheck = ()=>{
    overlay.current.classList.toggle('overlay-activated')
  }

  const navRemoveMenu = ()=>{
    document.getElementById('hamburger-checkbox').checked = !document.getElementById('hamburger-checkbox').checked
  }

  return (
    <>
    <nav className='navbar'>
      <div className='title-container'>
        <Link to='/' className='nav-title-link'><h1 className='nav-title'>Pascale Stacey<span className='nav-title-grey'>artist painter</span></h1></Link>
          <input id='hamburger-checkbox' type='checkbox'/>
          <label className='hamburger' onClick={handleCheck} htmlFor='hamburger-checkbox'>
            <div className='hamburger-line'></div>
          </label>
      </div>
      <ul className='nav-link-container'>
        <Link to='/paintings'><li className='nav-link'>Paintings</li></Link>
        <Link to='/screens'><li className='nav-link'>Screens</li></Link>
        <Link to='/prints'><li className='nav-link'>Prints</li></Link>
        <Link to='/comissions'><li className='nav-link'>Comissions</li></Link>
        <Link to='/about'><li className='nav-link'>About</li></Link>
        {/* <Link to='/testimonials'><li className='nav-link'>Testimonials</li></Link> */}
        <Link to='/contact'><li className='nav-link'>Contact</li></Link>
      </ul>
    </nav>
    <div ref={overlay} className='overlay-menu'>
      <ul className='nav-link-container-overlay'>
        <Link to='/paintings' onClick={handleCheck + navRemoveMenu}><li className='nav-link'>Paintings</li></Link>
        <Link to='/screens' onClick={handleCheck + navRemoveMenu}><li className='nav-link'>Screens</li></Link>
        <Link to='/prints' onClick={handleCheck + navRemoveMenu}><li className='nav-link'>Prints</li></Link>
        <Link to='/comissions' onClick={handleCheck + navRemoveMenu}><li className='nav-link'>Comissions</li></Link>
        <Link to='/about' onClick={handleCheck + navRemoveMenu}><li className='nav-link'>About</li></Link>
        {/* <Link to='/testimonials' onClick={handleCheck + navRemoveMenu}><li className='nav-link'>Testimonials</li></Link> */}
        <Link to='/contact' onClick={handleCheck + navRemoveMenu}><li className='nav-link'>Contact</li></Link>
      </ul>
    </div>
    </>
  )
}

export default Navbar