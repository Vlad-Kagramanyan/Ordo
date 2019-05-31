import {
    ADD_DRAFT,
} from '../constants/discussions';


export default function discussions(state = {data: []}, action) {
    switch (action.type) {
        case ADD_DRAFT:
            return {...state, data: action.payload}
        default:
            return state
    }
}