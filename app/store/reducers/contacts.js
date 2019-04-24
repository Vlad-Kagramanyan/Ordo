import {
    ADD_CONTACTS,
    DELETE_CONTACTS,
    GET_CONTACTS
} from '../constants/contacts';


export default function contacts(state = {data: []}, action) {
    switch (action.type) {
        case ADD_CONTACTS:
            return {...state, data: action.payload}
        case GET_CONTACTS:
            return {...state, data: action.payload}
        case DELETE_CONTACTS:
            return state
        default:
            return state
    }
}