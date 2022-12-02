import { GET_PARTNER, GET_CONTACTLIST, GET_USERSLIST } from "../actions/types"
// on a pas besion de add_partner puisque ajout f font direct

const initState = {
    partners: [],
    contacts: [],
    usersList: []
}


const adminReducer = (state = initState, { type, payload }) => {
    switch (type) {

        case GET_PARTNER:
            return { ...state, partners: payload }

        case GET_CONTACTLIST:
            return { ...state, contacts: payload }

        case GET_USERSLIST:
            return { ...state, usersList: payload }
        default:
            return state;
    }
}
export default adminReducer
