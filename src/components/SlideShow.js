import React, {useState} from 'react'
import left from '../photos/logos/leftarrow.svg'
import right from '../photos/logos/rightarrow.svg'
import {useGlobalContext} from '../context'

function SlideShow() {
    const {loading, dataFromPam} = useGlobalContext()
    const {paintings = [{reflections:[], isolations:[], perceptions:[]}]} = dataFromPam
    const {reflections, isolations, perceptions} = paintings
    const slideShowPhotos = [...reflections,...isolations,...perceptions]
    const length = slideShowPhotos.length - 1

    const [slideImage, setSlideImage] = useState(0)
    const slideSource = slideShowPhotos[slideImage]

    const handleSlideShow = (num)=>{
      let check = slideImage + num;
      if(check < 0){
        setSlideImage(length)
      }
      else if(check > length){
        setSlideImage(0)
      }else{
        setSlideImage((oldState)=> oldState + num)
      }
    }

  return (
    <>{loading ? <h4>Loading...</h4> : <div>
        <div className='slide-show'>
          <img className='slide-show-img' alt='slide show of paintings by Pascale Stacey' src={slideSource.image_url}/> 
        </div>
        <div className='arrows'>
            <span onClick={()=>handleSlideShow(-1)}><img className='arrow left' alt='previous' src={left}/></span>
            <span onClick={()=>handleSlideShow(1)}><img className='arrow right' alt='next' src={right}/></span>
        </div>
        <p className='slide-show-info'>"{slideSource.title}" <small>{slideSource.materials}</small></p>
      </div>}
    </>
  )
}

export default SlideShow