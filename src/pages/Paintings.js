import React, {useState} from 'react'
import {useGlobalContext} from '../context'

function Paintings() {
  const {paintings, paintingsImages, loading, contentful, client, data, fetchPaintingsData} = useGlobalContext()

  if(paintings === null || paintingsImages === null){
    console.log(loading)
    console.log('empty')
    fetchPaintingsData()
  }

  const {id, title, materials, dimensions, description} = paintings[0]
  const {url} = paintingsImages[0].fields.file

  return (
    <>
      <h3>Paintings</h3>
      {loading? <h5>loading</h5> : <section>
        
        <p>{title}, {materials} </p>
        <img src={url} alt='imafdeaez'/>
      </section>}
      
    </>
    
  )
}

export default Paintings