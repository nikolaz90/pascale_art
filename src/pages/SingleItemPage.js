import React from 'react'
import { useParams } from 'react-router-dom'
import {useGlobalContext} from '../context'

function SingleItemPage() {
  const {id} = useParams()
  const {loading, data} = useGlobalContext()
  const {paintings, screens, prints} = data

  const allArtwork = [...paintings || [], ...screens || [], ...prints || []]

  console.log(allArtwork);



  return (
    <section>
      {loading ? <h5 className='loading'>LOADING... {id}</h5> : <article className='single-artwork-container'>
        <img className='single-artwork-img' src={allArtwork[id-1].imgUrl} alt={allArtwork[id-1].title}/>
        <div className='single-artwork-info'>
          <h2>{allArtwork[id-1].title}</h2>
          <p><small>{allArtwork[id-1].materials + ' - ' + allArtwork[id-1].dimensions}</small></p>
          <p>{allArtwork[id-1].description}</p>
        </div>
        
      </article>}
        

      
    </section>
  )
}

export default SingleItemPage