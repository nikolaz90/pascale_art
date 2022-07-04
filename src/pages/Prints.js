import React from 'react'
import PrintsDisplay from '../components/PrintsDisplay'

function Prints() {
  return (
    <main>
      <section className='prints-section text-container section'>
        <h2 className='page-title'>Prints</h2>
        <PrintsDisplay/>
        <p><small>Theses Giclée prints are printed by Gordon Burns - Skylight Publishing ltd</small></p>
      </section>
    </main>
    
  )
}

export default Prints