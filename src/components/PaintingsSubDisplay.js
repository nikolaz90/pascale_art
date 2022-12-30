import React from 'react'
import { Link } from 'react-router-dom'
import noImageLogo from '../photos/logos/No_image_available.svg.png'

function PaintingsSubDisplay({subDisplayData}) {
  return (
    <div className='paintings-articles-container'>{
        subDisplayData.map((item, index) => {
          if(!item.image_url){
            return
          }
          return (
            <article key={index} className='painting-article'>
                <img className='painting-article-img' src={item.image_url === "" ? noImageLogo : item.image_url} alt={item.title}/>
                <h5>{item.title}</h5>
                <p><small>{item.dimensions !== "n/a" ? item.dimensions : ""}</small></p> 
                <Link to={`/singleitempage${item.id}`}><button className='toggle-details-btn'>More</button></Link>
            </article> )
        })}
    </div>
  )
}

export default PaintingsSubDisplay