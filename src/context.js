import React, {useState, useContext, useEffect, useReducer} from 'react'
import reducer from './reducer';

const AppContext = React.createContext();

const initialState = {
    data: {},
    loading: true,
}


const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)

    //const url = 'https://cdn.contentful.com/spaces/fol21n7kmioh/environments/master/entries/5T41dzp3uIEUuPUsiZ2FRt?access_token=TDsrblmAYdyKYQ3eVkj86wdC_peFyZvI9q9kyi-QYuQ'
    const contenfulKey = process.env.REACT_APP_ACCESS_KEY

    const [getPaintings, setGetPaintings] = useState(null)


     const contentful = require('contentful')
     const client = contentful.createClient({
         space: 'fol21n7kmioh',
         accessToken: `${contenfulKey}`
     })

      //client.getEntry('5T41dzp3uIEUuPUsiZ2FRt').then(function (entry){
          //console.log(entry.fields);
      //})

    // client.getEntries().then(function(entries){
    //     entries.items.forEach(function (entry){
    //         if(entry.fields.paintingsImages){
    //             //console.log(entry.fields.paintingsImages[1].fields.file.url);
    //         }
    //     })
    // })


      const fetchPaintingsData = ()=>{
               client.getEntry('5T41dzp3uIEUuPUsiZ2FRt').then(function (entry){
                   setGetPaintings(entry.fields)
           }).catch((error)=> console.log(error))
      }


     useEffect(() => {
         fetchPaintingsData()
     }, [])

     useEffect(()=>{
        if(getPaintings===null){
            fetchPaintingsData()
            return
        }else{
            dispatch({type:'SET_DATA', payload:getPaintings})  
        }
     },[getPaintings])

    console.log(state);

    return (<AppContext.Provider value={{
        ...state,
        fetchPaintingsData,
    }}>
        {children}
    </AppContext.Provider>
)}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}