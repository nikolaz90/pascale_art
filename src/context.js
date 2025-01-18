import React, { useState, useContext, useEffect, useReducer } from 'react'
import reducer from './reducer';

const AppContext = React.createContext();

const initialState = {
    data: {},
    dataFromPam: {},
    loading: true
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const [getPamPaintings, setGetPamPaintings] = useState(null)
    const ruboApiEndPoint = 'https://rubopop.hi.nikolaz.tech/api/v1/clients/pam/paintings'
    const fetchPamData = () => {
        fetch(ruboApiEndPoint)
            .then((data) => data.json())
            .then((response) => setGetPamPaintings(response))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getPamPaintings === null ? fetchPamData() : dispatch({ type: "SET_PAM_DATA", payload: getPamPaintings })
    }, [getPamPaintings])

    return (<AppContext.Provider value={{
        ...state,
    }}>
        {children}
    </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }