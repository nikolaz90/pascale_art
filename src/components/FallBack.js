import React from 'react'

function Fallback() {
  return (
    <section className='fallback'>
        <h2>Oops, this page didn't load properly, please try refreshing</h2>
        <a className='btn' href='/'><button>refresh</button></a>
    </section>
  )
}

export default Fallback