import { ADD_PARTNER, GET_PARTNER } from "./types";
// import {useDispatch} from"react-redux"
import axios from "axios";

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
    .put(`http://localhost:5000/updatePartner/${id}`, updatePartner)
    .then((re) => dispatch(getPartner()));
};
