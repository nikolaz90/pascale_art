import React, {useState, useContext, useEffect, useReducer} from 'react'
import reducer from './reducer';

const AppContext = React.createContext();

const initialState = {
    data: {},
    dataFromPam: {},
    loading: true,
}


const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)

    const [getPaintings, setGetPaintings] = useState(null)
    const [getPamPaintings, setGetPamPaintings] = useState(null)

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
        let artworks = {}
        fetch('https://pam.herokuapp.com/paintings_data')
            .then((data)=> data.json())
            .then(response => {
                artworks.paintings = response.reduce((acc, curr) => {
                    if(curr.category === "painting") acc.push(curr)
                    return acc
                }, [])
                artworks.screens = response.reduce((acc, curr) => {
                    if(curr.category === "screen") acc.push(curr)
                    return acc
                }, [])
                artworks.prints = response.reduce((acc, curr) => {
                    if(curr.category === "print") acc.push(curr)
                    return acc
                }, [])
                setGetPamPaintings(artworks)
            })
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

    console.log(state, getPamPaintings);

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