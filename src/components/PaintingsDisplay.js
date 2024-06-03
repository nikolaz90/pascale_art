import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import PaintingsSubDisplay from './PaintingsSubDisplay'
import { capitalize } from '../utils/helpers/textHelpers'

function PaintingsDisplay() {
    const [isActive, setIsActive] = useState(0)
    const { loading, dataFromPam } = useGlobalContext()

    const paintings = dataFromPam.paintings || []
    const categories = Object.keys(paintings)

    const handleClickActive = (displayNum) => {
        setIsActive(displayNum)
    }

    return (
        <>
            <div className='sub-display-menu'>
                {
                    categories.map((category, index) => {
                        return (
                            <span key={index}
                                onClick={() => handleClickActive(index)}
                                className={`display-menu-btn ${isActive === index && 'active-menu-btn'}`}>
                                {capitalize(category)}
                            </span>
                        )
                    })
                }
            </div>

            {
                categories.map((category, index) => {
                    const paintData = paintings[category]
                    return (
                        isActive === index &&
                        <div key={index}>
                            {loading ? <h5 className='loading'>LOADING ...</h5> : <PaintingsSubDisplay subDisplayData={paintData} />}
                        </div>
                    )
                })
            }
        </>
    )
}

export default PaintingsDisplay

// landscape, city scape, impressions