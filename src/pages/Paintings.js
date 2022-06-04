import React from 'react'
import PaintingsDisplay from '../components/PaintingsDisplay'

function Paintings(){

  return (
    <main>
      <section className='paintings-section text-container section'>
        <h2 className='page-title'>Paintings</h2>
        <br/>
        <p className='paintings-menu-label'>People often say: ‘your work is so varied’.</p>
        <p className='paintings-menu-label'>At the moment my paintings seem to fall into three categories:</p>
        <PaintingsDisplay/>
      </section>
    </main>
    
  )
}

export default Paintings