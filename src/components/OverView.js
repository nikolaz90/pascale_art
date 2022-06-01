import React, { useState } from 'react'
import right from '../photos/logos/rightarrow.svg'
import { useGlobalContext } from '../context'

function OverView() {
    const {loading, data} = useGlobalContext()
    const {paintings = [{reflections:[], isolations:[], perceptions:[]}]} = data
    const {reflections, isolations, perceptions} = paintings[0]
    
    const overviewPaintings = [...isolations.slice(-2),...reflections.slice(0,2),...perceptions.slice(-2)]

    const [isMoreActive, setIsMoreActive] = useState(null);

    const handleMoreInfo = (index)=>{
        if(index === isMoreActive){
            return setIsMoreActive(null)
        }
        setIsMoreActive(index)
    }

  return (
    <div className='overview-container'>
        {loading ? <h4>Loading...</h4> : overviewPaintings.map((item, index)=>{
            const {id, title, description, dimensions, materials, imgUrl} = item
            return (
                <article className='overview-article' key={id}>
                    <img className='overview-img' src={imgUrl} alt={title} />
                    <img className='arrow more-details' src={right} alt='more details' style={{transform:`${isMoreActive===index? 'rotate(540deg)':''}`}} onClick={()=>handleMoreInfo(index)} />
                    {
                        isMoreActive === index ? 
                        <div className='overview-details'>
                            <p>description:</p>
                            <p><em>{description}</em> </p>
                            <p><small>{dimensions}</small></p>
                            <button className='toggle-details-btn' onClick={()=>handleMoreInfo(index)}>Less</button>
                        </div> : 
                            <div className='overview-details'>
                                <h3>{title}</h3>
                                <p>{materials}</p>
                                <button className='toggle-details-btn' onClick={()=>handleMoreInfo(index)}>More</button>
                            </div> 
                    }
                </article>
            )
        })}
    </div>
  )
}

export default OverView