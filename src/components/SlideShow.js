import React, {useState} from 'react'
import {paintings} from '../data/mockData/data'
import image1 from '../photos/paintings/img1.jpg'
import image2 from '../photos/paintings/img2.jpg'
import image3 from '../photos/paintings/img3.jpg'
import left from '../photos/logos/leftarrow.svg'
import right from '../photos/logos/rightarrow.svg'

function SlideShow() {
    const slideShow = [image1, image2, image3]
    const [slideImage, setSlideImage] = useState(0)
    const slideSource = slideShow[slideImage]
    const {materials, title} = paintings[slideImage]

    const handleSlideShow = (num)=>{
      let check = slideImage + num;
      if(check < 0){
        setSlideImage(2)
      }
      else if(check > 2){
        setSlideImage(0)
      }else{
        setSlideImage((oldState)=> oldState + num)
      }
    }

  return (
    <>
      <div className='slide-show'>
        <img className='slide-show-img' alt='slide show of paintings by Pascale Stacey' src={slideSource}/> 
      </div>
      <div className='arrows'>
          <span onClick={()=>handleSlideShow(-1)}><img className='arrow left' alt='previous' src={left}/></span>
          <span onClick={()=>handleSlideShow(1)}><img className='arrow right' alt='next' src={right}/></span>
      </div>
      <p>"{title}" <small>{materials}</small></p>
    </>
  )
}

export default SlideShow