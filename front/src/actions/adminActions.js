import { ADD_PARTNER, GET_PARTNER, ADD_CONTACTLIST, GET_CONTACTLIST, GET_USERSLIST } from "./types";
import axios from "axios";


// partner
export const addPartner = (newPartner) => (dispatch) => {
  axios
    .post("http://localhost:5000/admin/addNewPartner", newPartner)
    .then(
      (data) => {
        dispatch({
          type: ADD_PARTNER,
          payload: data,
          msg: setTimeout(() => {
            alert("hay success");
          }, 1000),
          // payload : alert("success")
        });
        dispatch(getPartner());
      }
      // setTimeout(()=>{
      //     dispatch({
      //         payload : alert("hay success")
      //     },1000)
      // })
    )
    // .catch((err) =>alert(`ERROR IN ADD NEW PARTNER ${err}`))
    .catch((err) => alert(err.response.data.msg));
};

export const getPartner = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:5000/admin/partnersList");
  dispatch({
    type: GET_PARTNER,
    payload: data,
  });

  // axios.get("http://localhost:5000/admin/partnersList")
  // .then(({data})=>dispatch({
  //     type:GET_PARTNER,
  //     payload: data
  // }))
  // .catch((err) =>alert(`ERROR IN GET ALL THE PARTNERS ${err}`))
};

export const deletePartner = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/admin/deletePartner/${id}`)
    .then(() => dispatch(getPartner()))
    .catch((err) => alert(`ERROR IN DELETE PARTNER ${err}`));
};

export const updatePartnerById = (id, updatePartner) => (dispatch) => {
  axios
    .put(`http://localhost:5000/admin/updatePartner/${id}`, updatePartner)
    .then((re) => dispatch(getPartner()));
};





// contact List

export const addContactList = (newContactInfo) => (dispatch) => {
  axios
    .post("http://localhost:5000/newContactInfo", newContactInfo)
    .then(
      (data) => {
        dispatch({
          type: ADD_CONTACTLIST,
          payload: data,
          msg: setTimeout(() => {
            alert("Les information est bien envoyée");
          }, 1000),
        });
        dispatch(getContactList());
      }
    )
    .catch((err) => alert(err.response.data.msg));
};

export const getContactList = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:5000/admin/contactsInfos");
  dispatch({
    type: GET_CONTACTLIST,
    payload: data,
  });
};

export const deleteContactList = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/admin/deleteContactInfo/${id}`)
    .then(() => dispatch(getContactList()))
    .catch((err) => alert(`ERROR IN DELETE contact liste ${err}`));
};


// users list

export const customers = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:5000/admin/customers");
  dispatch({
    type: GET_USERSLIST,
    payload: data,
  });
};

export const deleteCustomer = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/admin/deleteCustomer/${id}`)
    .then(() => dispatch(customers()))
    .catch((err) => alert(`ERROR IN DELETE contact liste ${err}`));
};

