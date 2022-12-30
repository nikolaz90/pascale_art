import React from 'react'
import PrintsScreensDisplay from '../components/PrintsScreensDisplay'
import { useGlobalContext } from '../context'

function Screens() {
  const { dataFromPam } = useGlobalContext()
  const { screens } = dataFromPam

  return (
    <main>
      <section className='screens-section text-container section'>
        <h2 className='page-title'>Screens</h2>
        <PrintsScreensDisplay printsScreenData={screens} />
      </section>
    </main>
    
  )
}

export default Screens