import React, {useState} from 'react'
//import {useGlobalContext} from '../context'
import {paintings} from '../data/mockData/data'
import SlideShow from '../components/SlideShow'
import OverView from '../components/OverView'

function Home() {

  return (
    <section className='section home-section'>
      <SlideShow/>
      <OverView/>
    </section>
  )
}

export default Home