import React from 'react'
import SlideShow from '../components/SlideShow'
import HomepageText from '../components/HomepageText'
import OverView from '../components/OverView'
import {useGlobalContext} from '../context'


function Home() {
  const {loading} = useGlobalContext()

  return (
    <main>
      
        {loading ? 
          <h3 className='loading-home'>
            <span className='loading-dots-reverse'>\ </span> Loading <span className='loading-dots'>/</span>
          </h3>
          : <section className='section home-section'>
            <SlideShow/>
            <HomepageText/>
            <OverView/>
          </section> 
        }
        
        
    </main>

  )
}

export default Home