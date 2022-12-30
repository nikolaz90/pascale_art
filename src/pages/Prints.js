import React from 'react'
import PrintsScreensDisplay from '../components/PrintsScreensDisplay'
import { useGlobalContext } from '../context'

function Prints() {
  const { dataFromPam } = useGlobalContext()
  const { prints } = dataFromPam
  return (
    <main>
      <section className='prints-section text-container section'>
        <h2 className='page-title'>Prints</h2>
        <PrintsScreensDisplay printsScreenData={prints} />
        <p><small>Theses Giclée prints are printed by Gordon Burns - Skylight Publishing ltd</small></p>
      </section>
    </main>
    
  )
}

export default Prints