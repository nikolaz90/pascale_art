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
  const singleArtwork = allArtwork.filter((item) => item.id === parseInt(id))[0]

  return (
    <main>
      {loading ? <h5 className='loading'>LOADING... {id}</h5> : <article className='single-artwork-container'>
        <img className='single-artwork-img' src={singleArtwork.image_url === "" ? noImageLogo : singleArtwork.image_url} alt={singleArtwork.title}/>
        <div className='single-artwork-info'>
          <h2>{singleArtwork.title}</h2>
          <p><small>{singleArtwork.materials + ' - ' + singleArtwork.dimensions}</small></p>
          <p>{singleArtwork.description}</p>
        </div>
      </article>}
    </main>
  )
}

export default SingleItemPage