function reducer (state, action){

    if(action.type === 'SET_DATA'){
        return {...state, data: action.payload, loading: false}
    }
    if(action.type === "SET_PAM_DATA"){
        return {...state, dataFromPam: action.payload, loading: false}
    }




    return state
}

export default reducer