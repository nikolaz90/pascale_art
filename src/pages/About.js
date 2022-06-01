import React from 'react'
import img1 from '../photos/details/img1.jpg'
import img2 from '../photos/details/img2.jpg'
import img3 from '../photos/details/img3.jpg'
import img4 from '../photos/details/img4.jpg'
import img5 from '../photos/details/img5.jpg'
import img6 from '../photos/details/img6.jpg'
import img7 from '../photos/details/img7.jpg'

function About() {
  return (
    <section className='section about-section text-container'>
      <h2 className='page-title'>The artist</h2>
      <p>
        Pascale Stacey is an Anglo-French artist, currently based in Britain, working out of a beautifully lit studio in rural Wiltshire. 
        She received a private art education in Brittany and has shown her work in Drogheda, London, and Reading. 
        She has exhibited her work over the last few years with the Marlborough Open Studios (see www.marlboroughopenstudios.co.uk) 
        and works mainly on commissions in the UK and abroad.  
      </p>
      <h2 className='page-title'>The process</h2>
      <p>
        Every piece is an individually thought-out and utterly unique proposition.
        For my screens, I have a close working relationship with a local craftsman, who shapes panels and frames to precise  specifications. 
        Materials are sourced locally and designed to be both light-weight and perfectly balanced.
        Inspired by tensions, patterns, collisions, still life, nature and the contemporary, 
        I experiment with different designs and colours to create an initial concept, either alone or in consultation with a client for a commission.
        Initially, I start by working with primary colours and white, in oil, acrylic, ink, or emulsion, in each case creating my own colours, by mixing and mixing.  
        It is part of my artistic identity. 
        The screens I use are made either of wood or of canvas and prices are on application.  
        My paintings, framed or unframed according to the choice of the purchaser, are priced in the range £120-3000. Drawings are priced from £100.
        I also paint murals either inside or outside the home.
      </p>
      <div className='about-img-container'>
        <img src={img1} alt='detail of work in process' className='about-detail-img'/>
        <img src={img2} alt='detail of work in process' className='about-detail-img'/>
        <img src={img3} alt='detail of work in process' className='about-detail-img'/>
        <img src={img4} alt='detail of work in process' className='about-detail-img'/>
        <img src={img5} alt='detail of work in process' className='about-detail-img'/>
        <img src={img6} alt='detail of work in process' className='about-detail-img'/>
        <img src={img7} alt='detail of work in process' className='about-detail-img'/>
      </div>
    </section>
  )
}

export default About