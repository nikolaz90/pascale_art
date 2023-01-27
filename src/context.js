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

    const [getPamPaintings, setGetPamPaintings] = useState(null)
      
    const fetchPamData = () => {
        fetch('https://pam.herokuapp.com/api/v1/paintings_data')
            .then((data)=> data.json())
            .then((response) => setGetPamPaintings(response))
            .catch((error) => console.log(error))
    }

    //leave for testing purposes
    // const fetchPamData = () => {
    //     fetch('https://pam.herokuapp.com/paintings_data')
    //         .then((data)=> data.json())
    //         .then((response) => setGetPamPaintings(response))
    //         .catch((error) => console.log(error))
    // }

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