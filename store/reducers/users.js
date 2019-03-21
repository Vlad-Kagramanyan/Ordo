import {
    REGiSTER_REQUEST_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAILURE,
    PARENT_REQUEST,
    PARENT_REQUEST_SUCCESS,
    PARENT_REQUEST_FAILURE,
    ADD_PARENT_REQUEST,
    ADD_PARENT_REQUEST_SUCCESS,
    ADD_PARENT_REQUEST_FAILURE,
    CHILD_REQUEST,
    CHILD_REQUEST_SUCCESS,
    CHILD_REQUEST_FAILURE,
    ADD_CHILD_REQUEST,
    ADD_CHILD_REQUEST_SUCCESS,
    ADD_CHILD_REQUEST_FAILURE,
    WEEK_REQUEST,
    WEEK_REQUEST_SUCCESS,
    WEEK_REQUEST_FAILURE
} from '../constants/users';


const initialState = {
    isloading: false,
    loaded: false,
    data: {},
    error: "",
    parent1: true,
    week: true,
    parentCount: 2,
    child1: true,
    childCount: 2
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case REGiSTER_REQUEST_SUCCESS:
            console.log('reg reducer')
            return { ...state, ...{ loaded: true, login: false, parent: true }, data: { token: action.payload.accessToken, google_id: action.payload.id, email: action.payload.email, } }

        case LOGIN_REQUEST:
            return { ...state, ...{ isloading: true, error: "", } }
        case LOGIN_REQUEST_SUCCESS:
            return { ...state, ...{ isloading: false, loaded: true, login: false, paid: true }, data: { token: action.payload.token, email: action.payload.email, } }
        case LOGIN_REQUEST_FAILURE:
            return { ...state, ...{ error: action.payload, isloading: false } }

        case PARENT_REQUEST:
            return { ...state, ...{ isloading: true, error: "", } }
        case PARENT_REQUEST_SUCCESS:
            return { ...state, ...{ isloading: false, loaded: true, parent: false, child: true }, data: {} }
        case PARENT_REQUEST_FAILURE:
            return { ...state, ...{ error: action.payload, isloading: false } }

        case ADD_PARENT_REQUEST:
            return { ...state, ...{ isloading: true, error: "", } }
        case ADD_PARENT_REQUEST_SUCCESS:
            return { ...state, ...{ parentCount: state.parentCount + 1, isloading: false, loaded: true, parent1: false }, data: {} }
        case ADD_PARENT_REQUEST_FAILURE:
            return { ...state, ...{ error: action.payload, isloading: false } }

        case CHILD_REQUEST:
            return { ...state, ...{ isloading: true, error: "", } }
        case CHILD_REQUEST_SUCCESS:
            return { ...state, ...{ isloading: false, loaded: true, child: false, week: true }, data: {} }
        case CHILD_REQUEST_FAILURE:
            return { ...state, ...{ error: action.payload, isloading: false } }

        case ADD_CHILD_REQUEST:
            return { ...state, ...{ isloading: true, error: "", } }
        case ADD_CHILD_REQUEST_SUCCESS:
            return { ...state, ...{ parentCount: state.childCount + 1, isloading: false, loaded: true, child1: false }, data: {} }
        case ADD_CHILD_REQUEST_FAILURE:
            return { ...state, ...{ error: action.payload, isloading: false } }


        default:
            return state
    }
}