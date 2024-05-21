import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import PaintingsSubDisplay from './PaintingsSubDisplay'

function PaintingsDisplay() {
    const [isActive, setIsActive] = useState(0)

    const { loading, dataFromPam } = useGlobalContext()
    const { paintings = [{ reflections: [], isolations: [], perceptions: [] }] } = dataFromPam
    const { reflections, isolations, perceptions } = paintings

    const handleClickActive = (displayNum) => {
        setIsActive(displayNum)
    }

    return (
        <>
            <div className='sub-display-menu'>
                <span onClick={() => handleClickActive(0)} className={`display-menu-btn ${isActive === 0 && 'active-menu-btn'}`}>Reflections</span>
                <span onClick={() => handleClickActive(1)} className={`display-menu-btn ${isActive === 1 && 'active-menu-btn'}`}>Isolations</span>
                <span onClick={() => handleClickActive(2)} className={`display-menu-btn ${isActive === 2 && 'active-menu-btn'}`}>Perceptions</span>
            </div>
            {isActive === 0 && <div>
                {loading ? <h5 className='loading'>LOADING ...</h5> : <PaintingsSubDisplay subDisplayData={reflections} />}
            </div>}
            {isActive === 1 && <div>
                {loading ? <h5 className='loading'>LOADING ...</h5> : <PaintingsSubDisplay subDisplayData={isolations} />}
            </div>}
            {isActive === 2 && <div>
                {loading ? <h5 className='loading'>LOADING ...</h5> : <PaintingsSubDisplay subDisplayData={perceptions} />}
            </div>}
        </>
    )
}

export default PaintingsDisplay