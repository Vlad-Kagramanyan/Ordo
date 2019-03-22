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
    childsID: [],
    parentsID: [],
    data: {},
    error: "",
    parent1: true,
    login: true,
    parentCount: 1,
    child1: true,
    childCount: 1
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case REGiSTER_REQUEST_SUCCESS:
            return { ...state, ...{ loaded: true, login: false, parent: true }, data: { google_token: action.payload.accessToken, google_id: action.payload.id, email: action.payload.email, } }

        case LOGIN_REQUEST:
            return { ...state, ...{ isloading: true, error: "", } }
        case LOGIN_REQUEST_SUCCESS:
            return { ...state, ...{ isloading: false, loaded: true, login: false, parent: true }, data: { token: action.payload.token, email: action.payload.email, } }
        case LOGIN_REQUEST_FAILURE:
            return { ...state, ...{ error: action.payload, isloading: false } }

        case PARENT_REQUEST:
            return { ...state, ...{ isloading: true, error: "", } }
        case PARENT_REQUEST_SUCCESS:
            let parentsID = Object.assign([], state.parentsID);
            parentsID.push({ parent_id: action.payload.parent_id })
            return { ...state, ...{ isloading: false, parent1: false, loaded: true, child: true, parent: false,   parentsID, parentsID }, data: {token: action.payload.token } }
        case PARENT_REQUEST_FAILURE:
            return { ...state, ...{ error: action.payload, isloading: false } }

        case ADD_PARENT_REQUEST:
            console.log('add parent requrest')
            return { ...state, ...{ isloading: true, error: "", } }
        case ADD_PARENT_REQUEST_SUCCESS:
            let parentsID2 = Object.assign([], state.parentsID);
            parentsID2.push({ parent_id: action.payload.parent_id })
            return { ...state, ...{ parentCount: state.parentCount + 1, isloading: false, child: false, loaded: true, parent1: false, parentsID: parentsID2 }, data: {  token: action.payload.token} }
        case ADD_PARENT_REQUEST_FAILURE:
            return { ...state, ...{ error: action.payload, isloading: false } }

        case CHILD_REQUEST:
            return { ...state, ...{ isloading: true, error: "", } }
        case CHILD_REQUEST_SUCCESS:
            let childsID = Object.assign([], state.childsID);
            childsID.push({ child_id: action.payload.child_id })
            return { ...state, ...{ isloading: false, loaded: true, child: false, week: true, childsID: childsID }, data: {} }
        case CHILD_REQUEST_FAILURE:
            return { ...state, ...{ error: action.payload, isloading: false } }

        case ADD_CHILD_REQUEST:
        console.log('add child request')
            return { ...state, ...{ isloading: true, error: "", } }
        case ADD_CHILD_REQUEST_SUCCESS:
            let childsID2 = Object.assign([], state.childsID);
            childsID2.push({ child_id: action.payload.child_id })
            return { ...state, ...{ parentCount: state.childCount + 1, isloading: false, loaded: true, child1: false, childsID: childIsD2 }, data: {} }
        case ADD_CHILD_REQUEST_FAILURE:
            return { ...state, ...{ error: action.payload, isloading: false } }


        default:
            return state
    }
}