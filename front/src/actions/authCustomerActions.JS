import axios from "axios";
import * as Types from "./types";

export const registerCustomer = (data) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/customer/addCustomer",
      data
    );
    dispatch({
      type: Types.REGISTER,
      payload: res.data,
    });
    console.log(res.data);
  } catch (error) {
    dispatch({
      type: Types.REGISTER_FAIL,
      payload: error.message ? error.message : error.response.data.errors,
    });
  }
};

export const LoginCus = (data) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:5000/customer/signin", data);
    dispatch({
      type: Types.LOGIN,
      payload: res.data,
    });

    console.log(res.data);
  } catch (error) {
    dispatch({
      type: Types.LOGIN_FAIL,
      payload: error.message ? error.message : error.response.data.errors,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: Types.LOGOUT,
    });

    localStorage.clear();
  } catch (error) {
    console.log(error);
  }
};
