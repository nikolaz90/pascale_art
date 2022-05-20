import React, {useState} from 'react'
import PaintingsDisplay from '../components/PaintingsDisplay'
import {useGlobalContext} from '../context'

function Paintings(){
  // const {loading, data, fetchPaintingsData} = useGlobalContext()

  // const {paintings, paintingsImages} = data

  // if(paintings === null || paintingsImages === null){
  //   console.log(loading)
  //   console.log('empty')
  //   fetchPaintingsData()
  // }

  // const {id, title, materials, dimensions, description} = paintings[0]
  // const {url} = paintingsImages[0].fields.file

  return (
    <>
      {/* <h3>Paintings</h3>
      {loading? <h5>loading</h5> : <section>
        
        <p>{title}, {materials} </p>
        <img src={url} alt='imafdeaez'/>
      </section>} */}
      <PaintingsDisplay/>
    </>
    
  )
}

export default Paintings