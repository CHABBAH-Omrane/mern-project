import {ADD_PARTNER ,GET_PARTNER }  from "../actions/types" 
// on a pas besion de add_partner puisque ajout f font direct

const initState = {
    partners:[]
}

const adminReducer = (state= initState ,{type,payload} )=>{
    switch(type){
    // case ADD_PARTNER:
    //     return {
    //         ...state,
    //         partners : payload
    //     }
        
        // {...state,partners:[...state.partners,payload]}
    case GET_PARTNER:
        return {...state,partners:payload}
    default:
        return state;
}}
export default adminReducer