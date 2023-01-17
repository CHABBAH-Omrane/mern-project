import * as Types from "../actions/types";
let user = null;
let token = null;
try {
  user = JSON.parse(localStorage.getItem("user"));
} catch (error) {}
try {
  token = JSON.parse(localStorage.getItem("token"));
} catch (error) {}
const initialState = {
  // customer:JSON.parse(localStorage.getItem("customer")),
  token,
  isAuth: localStorage.getItem("isAuth") === "true" ? true : false,
  errors: null,
  user,
};

const authCustomerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.REGISTER:
    case Types.LOGIN:
      localStorage.setItem("auth-token", payload.token);
      localStorage.setItem("isAuth", true);
      //localStorage.setItem("customer", JSON.stringify(payload.customer));
      localStorage.setItem("token", payload.token);
      localStorage.setItem("user", JSON.stringify(payload.existCustomer));

      return {
        ...state,
        customer: payload.customer,
        token: payload.token,
        errors: null,
        isAuth: true,

        user: payload.existCustomer,
      };
    case Types.REGISTER_FAIL:
    case Types.LOGIN_FAIL:
      return { ...state, errors: payload, isAuth: false };

    case Types.LOGOUT:
      localStorage.clear();
      return {
        customer: null,
        token: null,
        isAuth: false,
        errors: null,
      };

    default:
      return state;
  }
};
export default authCustomerReducer;
