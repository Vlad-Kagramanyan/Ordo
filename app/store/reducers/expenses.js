import {
    ADD_EXPENSES,
    GET_EXPENSES,
    DELETE_EXPENSES,
    CLEAR_EXPENSES
} from '../constants/expenses';


export default function user(state = {data: [], disable: false}, action) {
    switch (action.type) {
        case GET_EXPENSES:
            return {...state, data: action.payload, disable: false}
        case CLEAR_EXPENSES:
            return {...state, data: [], disable: true}
        case ADD_EXPENSES:
            return {...state, data: action.payload, disable: false}
        case DELETE_EXPENSES:
            return state
        default:
            return state
    }
}