import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//pages
import Home from './pages/Home'
import Paintings from './pages/Paintings'
import Screens from './pages/Screens'
import Prints from './pages/Prints'
import Comissions from './pages/Comissions'
import About from './pages/About'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Error from './pages/Error'

//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() { 
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/paintings' element={<Paintings/>}/>
            <Route path='/screens' element={<Screens/>}/>
            <Route path='/prints' element={<Prints/>}/>
            <Route path='/comissions' element={<Comissions/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/testimonials' element={<Testimonials/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/*' element={<Error/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default App