import React from 'react'
import {useGlobalContext} from '../context'
import {Link} from 'react-router-dom'

function PaintingsDisplay() {
const {loading, data} = useGlobalContext()
const {paintings, paintingsImages} = data


return (
    <>
        {loading ? <h5 className='loading'>LOADING ...</h5> : <div className='paintings-articles-container'>{
            paintings.map((item, index) => {
                return (
                <article key={index} className='painting-article'>
                    <img className='painting-article-img' src={paintingsImages[index].fields.file.url} alt={item.title}/>
                    <h5>{item.title}</h5>
                    <p><small>{item.dimensions}</small></p>
                    <Link to={`/singleitempage${item.id}`}><button className='toggle-details-btn'>More</button></Link>
                </article> )
            })}
        </div>}
        
    </>
  )
}

export default PaintingsDisplay