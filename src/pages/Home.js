import React, {useState} from 'react'
//import {useGlobalContext} from '../context'
import {paintings} from '../data/mockData/data'
import SlideShow from '../components/SlideShow'
import HomepageText from '../components/HomepageText'
import OverView from '../components/OverView'


function Home() {

  return (
    <main>
      <section className='section home-section'>
        <SlideShow/>
        <HomepageText/>
        <OverView/>
      </section>    
    </main>

  )
}

export default Home