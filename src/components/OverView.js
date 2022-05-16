import React, {useEffect, useState} from 'react'
import {paintings} from '../data/mockData/data'
import image1 from '../photos/paintings/img1.jpg'
import image2 from '../photos/prints/img1.jpg'
import image3 from '../photos/screens/img1.jpg'
import right from '../photos/logos/rightarrow.svg'

const articlePhotos = [image1, image2, image3]



function OverView() {
    const [isMoreActive, setIsMoreActive] = useState(null);

    const handleMoreInfo = (index)=>{
        if(index === isMoreActive){
            return setIsMoreActive(null)
        }
        //console.log(paintings[index].description)
        setIsMoreActive(index)
    }




  return (
    <div className='overview-container'>
        {paintings.map((item, index)=>{
            const {id, title, description, dimensions, materials} = item
            return (
                <article className='overview-article' key={id}>
                    <img className='overview-img' src={articlePhotos[index]} alt={title} />
                    <img className='arrow more-details' src={right} alt='more details' style={{transform:`${isMoreActive===index? 'rotate(540deg)':''}`}} onClick={()=>handleMoreInfo(index)} />
                    {
                        isMoreActive === index ? 
                        <div className='overview-details'>
                            <p>description:</p>
                            <p><em>{description}</em> </p>
                            <p><small>{dimensions}</small></p>
                        </div> : 
                            <div className='overview-details'>
                                <h3>{title}</h3>
                                <p>{materials}</p>
                            </div> 
                    }
                </article>
            )
        })}


    </div>
  )
}

export default OverView