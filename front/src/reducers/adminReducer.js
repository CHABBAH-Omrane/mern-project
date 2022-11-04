import {ADD_PARTNER ,GET_PARTNER }  from "../actions/types" 


const adminReducer = (state= {partners:[]} ,{type,payload} )=>{
    switch(type){
    case ADD_PARTNER:
        return {...state,partners:[...state.partners,payload]}
    case GET_PARTNER:
        return {...state,partners:payload}
    default:
        return state;
}}
export default adminReducer