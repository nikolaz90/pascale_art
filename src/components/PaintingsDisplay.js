import React, { useEffect, useState } from 'react'
import {useGlobalContext} from '../context'

function PaintingsDisplay() {
//     const [paintingsData, setPaintingsData] = useState({})
//     const [load, setLoad] = useState(true)

//      const contentful = require('contentful')
//      const client = contentful.createClient({
//          space: 'fol21n7kmioh',
//          accessToken: "TDsrblmAYdyKYQ3eVkj86wdC_peFyZvI9q9kyi-QYuQ"
//      })

//      const fetchPaintingsData = async ()=>{
//          client.getEntry('5T41dzp3uIEUuPUsiZ2FRt').then(function (entry){
//              setPaintingsData(entry.fields)
//              setLoad(false)
//      }).catch((error)=> console.log(error))
//  }

// useEffect(()=>{
//     setLoad(true)
//     fetchPaintingsData()
// }, [])

//console.log(paintingsData);

//const {paintings} = paintingsData

const {loading, data} = useGlobalContext()

return (
    <div>

        PaintingsDisplay
        {loading ? <h3>LOADING!!!</h3> : <div>{data.paintings.map((item, index) => {
            return <p key={index}>{item.title}</p>
        })}</div>}
        
    </div>
  )
}

export default PaintingsDisplay