import React from 'react'
import PaintingsDisplay from '../components/PaintingsDisplay'

function Paintings(){

  return (
    <section className='paintings-section'>
      <h4 className='page-title'>Paintings</h4>
      <p>My work can be categorised in to three themes: </p>
        <PaintingsDisplay/>
    </section>
  )
}

export default Paintings