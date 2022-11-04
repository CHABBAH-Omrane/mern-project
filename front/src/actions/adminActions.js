import {ADD_PARTNER ,GET_PARTNER }  from "./types" 
// import {useDispatch} from"react-redux"
import  axios  from 'axios'

export const addPartner =( newPartner) =>(dispatch)=>{
    axios.post("http://localhost:5000/admin/addNewPartner")
    .then(({data})=>dispatch({
        type:ADD_PARTNER,
        payload: data
    }))
    .catch((err) =>alert(`ERROR IN ADD NEW PARTNER ${err}`))
}

export const getPartner =()=>(dispatch)=>{
    axios.get("http://localhost:5000/admin/partnersList")
    .then(({data})=>dispatch({
        type:GET_PARTNER,
        payload: data
    }))
    .catch((err) =>alert(`ERROR IN GET ALL THE PARTNERS ${err}`))
}