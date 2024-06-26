import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

//pages
import Home from './pages/Home'
import Paintings from './pages/Paintings'
import Screens from './pages/Screens'
import Prints from './pages/Prints'
import Commissions from './pages/Commissions'
import About from './pages/About'
import News from './pages/News'
import Contact from './pages/Contact'
import Error from './pages/Error'
import SingleItemPage from './pages/SingleItemPage'

//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Fallback from './components/FallBack'

const handleError = (error, errorInfo) => {
  console.log('Logging error : ', error, errorInfo)
}

function App() {
  return (
    <Router>
      <ErrorBoundary FallbackComponent={Fallback} onError={handleError}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/paintings' element={<Paintings />} />
          <Route path='/screens' element={<Screens />} />
          <Route path='/prints' element={<Prints />} />
          <Route path='/commissions' element={<Commissions />} />
          <Route path='/about' element={<About />} />
          <Route path='/news' element={<News />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/singleitempage:uuid' element={<SingleItemPage />} />
          <Route path='/*' element={<Error />} />
        </Routes>
        <Footer />
      </ErrorBoundary>


    </Router>
  )
}

export default App