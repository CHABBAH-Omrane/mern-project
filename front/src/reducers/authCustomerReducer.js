// import React from "react"
import * as Types from "../actions/types"

const initialState= {
    customer:JSON.parse(localStorage.getItem("customer")),
    token:null,
    isAuth:localStorage.getItem("isAuth")==="true" ? true :  false,
    errors: null
}

const  authCustomerReducer= (state = initialState,{type, payload})=>{
switch (type) {
    case Types.REGISTER:
        case Types.LOGIN:
        localStorage.setItem("auth-token", payload.token);
        localStorage.setItem("isAuth", true);
        localStorage.setItem("existCustomer", JSON.stringify(payload.existCustomer));

    return{
        ...state,
        customer:payload.customer,
        token:payload.token,
        errors:null,
        isAuth:true,
        existCustomer: JSON.parse(localStorage.getItem("existCustomer"))
    }
    case Types.REGISTER_FAIL:
        case Types.LOGIN_FAIL:
    return {...state,errors:payload, isAuth:false}
    default:
        return state
}
}
export default authCustomerReducer