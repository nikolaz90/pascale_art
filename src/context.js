import React, {useState, useContext} from 'react'

const AppContext = React.createContext();


const AppProvider = ({children})=>{
    const [loading, setLoading] = useState(false)





    return <AppContext.Provider value={{
        loading,
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}