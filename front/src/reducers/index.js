import { combineReducers } from "redux";
import adminReducer from "./adminReducer"
import authCustomerReducer from "./authCustomerReducer"
//all the reducer

export default combineReducers({ adminReducer, authCustomerReducer }) //add her also