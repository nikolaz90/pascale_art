import React from 'react'
import { useGlobalContext } from '../context'

function HomepageText() {
  const { loading, dataFromPam } = useGlobalContext()
  const paintings = dataFromPam.paintings || ['landscapes', "cityscapes", "seascapes"]
  const categories = Object.keys(paintings)

  return (
    <section className='homepage-text-section text-container'>
      {
        loading ?
          <p>Loading...</p>
          :
          <>
            <p>
              People say: ‘your work is so varied.’ I suppose it is. In fact for me my paintings constantly evolve.
              At the moment they seem to fall into three categories: paintings about <em className='emphasised-text'>{categories[0]}</em>, <em className='emphasised-text'>{categories[1]}</em>, and <em className='emphasised-text'>{categories[2]}</em>.
            </p>
            <p>
              I am attracted to <em className='emphasised-text'>reflection</em> through glass and water and to <em className='emphasised-text'>isolation</em> as it is expressed by abandoned buildings and bare landscapes.
              As for <em className='emphasised-text'>perception</em>, I have used lines and squares between the viewer and the picture not only to add depth but also to tease the viewer, extending an invitation to study the work more closely.
            </p>
          </>
      }
    </section>
  )
}

export default HomepageText