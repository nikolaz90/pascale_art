import React from 'react'
import img1 from '../photos/details/img1.jpg'
import img2 from '../photos/details/img2.jpg'
import img3 from '../photos/details/img3.jpg'
import img4 from '../photos/details/img4.jpg'
import img5 from '../photos/details/img5.jpg'
import img6 from '../photos/details/img6.jpg'
import img7 from '../photos/details/img7.jpg'
import img8 from '../photos/details/img8.jpg'
import img9 from '../photos/details/img9.jpg'
import img10 from '../photos/details/img10.jpg'
import artistImg from '../photos/about/pascImg1.jpg'

function About() {
  const detailsImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

  return (
    <main>
      <section className='section about-section text-container'>
        <h2 className='page-title'>The artist</h2>
        <p>
          Pascale Stacey is an Anglo-French artist, currently based in Britain, working out of a beautifully lit studio in rural Wiltshire. 
          She received a private art education in Brittany and has shown her work in Drogheda, London, and Reading. 
          She has exhibited her work over the last few years with the Marlborough Open Studios (see www.marlboroughopenstudios.co.uk) 
          and works mainly on commissions in the UK and abroad.  
        </p>
        <p>
          My formal artistic CV is short. It was a tradition in my mother’s family to be taught art from an early age. 
          Throughout our school years, my three sisters and I were all pupils of Cécilia, a well-known painter in our town in Brittany. 
          Unfortunately attending art school was not an option but this did not stop me from painting during any spare time available.
        </p>

        <p>
          In 2004, I moved to Brussels from London and there I started painting screens on commission. Today my screens stand in homes in Belgium, Italy, France, and the UK. 
          On returning to the UK in 2014 when I came to live in Avebury, I decided to paint more or less full-time, encouraged by local artists Charles Rodwell and the late Diana Reynell.
        </p>
        <p>
          I have exhibited during the Marlborough Open Studios since 2017. 
          Previously my work has been shown in galleries in Reading, Notting Hill Gate, and Dun Laoghaire. 
          Next on the list: Harrogate and - hopefully! - Montsalès in the south of France.
        </p>
        <img src={artistImg} className='artist-img' alt='Pascale Stacey smiling at the camera whilst painting' />
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
          {detailsImages.map((item, index)=>{
            return <img key={index} src={item} alt='detail of work in process' className='about-detail-img'/>
          })}
        </div>
      </section>
    </main>
    
  )
}

export default About