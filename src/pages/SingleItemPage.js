import React from 'react'
import { useParams } from 'react-router-dom'
import {useGlobalContext} from '../context'
import noImageLogo from '../photos/logos/No_image_available.svg.png'

function SingleItemPage() {
  const {id} = useParams()
  const {loading, dataFromPam} = useGlobalContext()

  const {paintings = {reflections:[],isolations:[],perceptions:[]}, screens, prints} = dataFromPam 
  const {reflections, isolations, perceptions} = paintings

  const allArtwork = [...reflections || [], ...isolations || [], ...perceptions || [], ...screens || [], ...prints || []]
  // sort out the back end paintings all before continuing here. 
  console.log(allArtwork);
  return (
    <main>
      {loading ? <h5 className='loading'>LOADING... {id}</h5> : <article className='single-artwork-container'>
        <img className='single-artwork-img' src={allArtwork[id-1].image_url === "" ? noImageLogo : allArtwork[id-1].image_url} alt={allArtwork[id-1].title}/>
        <div className='single-artwork-info'>
          <h2>{allArtwork[id-1].title}</h2>
          <p><small>{allArtwork[id-1].materials + ' - ' + allArtwork[id-1].dimensions}</small></p>
          <p>{allArtwork[id-1].description}</p>
        </div>
      </article>}
    </main>
  )
}

export default SingleItemPage