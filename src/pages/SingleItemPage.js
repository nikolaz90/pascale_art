import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import noImageLogo from '../photos/logos/No_image_available.svg.png'

function SingleItemPage() {
  const { uuid } = useParams()

  const { loading, dataFromPam } = useGlobalContext()

  const paintings = dataFromPam.paintings || []
  const allArtwork = Object.values(paintings).reduce((acc, curr) => {
    acc.push(...curr)
    return acc;
  }, [...dataFromPam.screens, ...dataFromPam.prints])

  const singleArtwork = allArtwork.filter((item) => item.uuid === uuid)[0]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <main>
      {loading ? <h5 className='loading'>LOADING... {uuid}</h5> : <article className='single-artwork-container'>
        <img className='single-artwork-img' src={singleArtwork.image_url === "" ? noImageLogo : singleArtwork.image_url} alt={singleArtwork.title} />
        <div className='single-artwork-info'>
          <h2>{singleArtwork.title}</h2>
          <p><small>{singleArtwork.materials} {singleArtwork.dimensions !== 'n/a' ? `- ${singleArtwork.dimensions}` : ""}</small></p>
          <p>{singleArtwork.description}</p>
          <p><small>{singleArtwork.price}</small></p>
        </div>
      </article>}
    </main>
  )
}

export default SingleItemPage