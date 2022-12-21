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

    // const [getPaintings, setGetPaintings] = useState(null)
    const [getPamPaintings, setGetPamPaintings] = useState(null)

    //contentful solution
    // const contentful = require('contentful')
    // const client = contentful.createClient({
    //     space: process.env.REACT_APP_SPACE_ID,
    //     accessToken: process.env.REACT_APP_ACCESS_KEY
    // })

    // const fetchPaintingsData = ()=>{
    //         client.getEntry('5T41dzp3uIEUuPUsiZ2FRt').then(function (entry){
    //             setGetPaintings(entry.fields)
    //     }).catch((error)=> console.log(error))
    // }

    // useEffect(()=>{
    //     if(getPaintings===null){
    //         fetchPaintingsData()
    //         return
    //     }else{
    //         dispatch({type:'SET_DATA', payload:getPaintings})  
    //     }
    // },[getPaintings])

    //DIY solution 
    const fetchPamData = () => {
        fetch('https://pam.herokuapp.com/paintings_data')
            .then((data)=> data.json())
            .then((response) => setGetPamPaintings(response))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getPamPaintings === null ? fetchPamData() : dispatch({type: "SET_PAM_DATA", payload: getPamPaintings})
    }, [getPamPaintings])

    // console.log(state);

    return (<AppContext.Provider value={{
        ...state,
    }}>
        {children}
    </AppContext.Provider>
)}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}