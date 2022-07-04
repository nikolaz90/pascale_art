import React, {useState, useContext, useEffect, useReducer} from 'react'
import reducer from './reducer';

const AppContext = React.createContext();

const initialState = {
    data: {},
    loading: true,
}


const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)

    const [getPaintings, setGetPaintings] = useState(null)

     const contentful = require('contentful')
     const client = contentful.createClient({
         space: process.env.REACT_APP_SPACE_ID,
         accessToken: process.env.REACT_APP_ACCESS_KEY
     })

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

    //console.log(state);

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