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
    WEEK_REQUEST_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_REQUEST_SUCCESS,
    UPDATE_USER_REQUEST_FAILURE,
    UPDATE_CHILD_REQUEST,
    UPDATE_CHILD_REQUEST_SUCCESS,
    UPDATE_CHILD_REQUEST_FAILURE,
    ADD_CHILD_DETAILS,
    ADD_PARENT_DETAILS,
    ADD_CHILD_IMAGE,
    ADD_IMAGE,
    EXIT
} from '../constants/users';


const initialState = {
    isloading: false,
    loaded: false,
    childsID: [],
    parentsID: [],
    data: {},
    userDetails: {},
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
            let activeUser = { activeUser: action.payload.family.parents.filter((item) => item.id === action.payload.success.parent_id) }
            activeUser = { activeUser: activeUser.activeUser[0] };
            let data = { ...action.payload.success, family: action.payload.family, ...activeUser }
            return { ...state, ...{ isloading: false, loaded: true, login: false, main: true }, data: data }
        case LOGIN_REQUEST_FAILURE:
            return { ...state, ...{ error: action.payload, isloading: false } }

        case PARENT_REQUEST:
            return { ...state, ...{ isloading: true, error: "", } }
        case PARENT_REQUEST_SUCCESS:
            let parentsID = Object.assign([], state.parentsID);
            parentsID.push({ parent_id: action.payload.parent_id })
            return { ...state, ...{ isloading: false, parent1: false, loaded: true, child: true, parent: false, parentsID, parentsID }, data: { token: action.payload.token, family_id: action.payload.family_id } }
        case PARENT_REQUEST_FAILURE:
            return { ...state, ...{ error: action.payload, isloading: false } }

        case ADD_PARENT_REQUEST:
            return { ...state, ...{ isloading: true, error: "", } }
        case ADD_PARENT_REQUEST_SUCCESS:
            let parentsID2 = Object.assign([], state.parentsID);
            parentsID2.push({ parent_id: action.payload.parent_id })
            return { ...state, ...{ parentCount: state.parentCount + 1, isloading: false, child: false, loaded: true, parent1: false, parentsID: parentsID2 }, data: { token: action.payload.token, family_id: action.payload.family_id } }
        case ADD_PARENT_REQUEST_FAILURE:
            return { ...state, ...{ error: action.payload, isloading: false } }

        case CHILD_REQUEST:
            return { ...state, ...{ isloading: true, error: "", } }
        case CHILD_REQUEST_SUCCESS:
            let childsID = Object.assign([], state.childsID);
            childsID.push({ child_id: action.payload.child_id })
            return { ...state, ...{ isloading: false, loaded: true, child: false, week: true, childsID: childsID }, }
        case CHILD_REQUEST_FAILURE:
            return { ...state, ...{ error: action.payload, isloading: false } }

        case ADD_CHILD_REQUEST:
            return { ...state, ...{ isloading: true, error: "", } }
        case ADD_CHILD_REQUEST_SUCCESS:
            let childsID2 = Object.assign([], state.childsID);
            childsID2.push({ child_id: action.payload.child_id })
            return { ...state, ...{ parentCount: state.childCount + 1, isloading: false, loaded: true, child1: false, childsID: childsID2 }, }
        case ADD_CHILD_REQUEST_FAILURE:
            return { ...state, ...{ error: action.payload, isloading: false } }

        case ADD_CHILD_DETAILS:
            return { ...state, ...{ userDetails: Object.assign({}, ...state.data.family.childs.filter(item => item.id == action.payload)) } }
        case ADD_PARENT_DETAILS:
            return { ...state, ...{ userDetails: Object.assign({}, ...state.data.family.parents.filter(item => item.id == action.payload)) } }

        case UPDATE_USER_REQUEST:
            return state
        case UPDATE_USER_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                data: {
                    ...state.data, family: {
                        ...state.data.family, parents: state.data.family.parents.map((item) => {
                            return (item.email == action.payload.email) ? { ...item, ...action.payload } : item
                        })
                    },
                    activeUser: Object.assign({}, state.data.activeUser, action.payload)
                }
            })
        case UPDATE_USER_REQUEST_FAILURE:
            return state

        case UPDATE_CHILD_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                data: {
                    ...state.data, family: {
                        ...state.data.family, childs: state.data.family.childs.map((item) => {
                            return (item.id == action.payload.child_id) ? { ...item, ...action.payload } : item
                        })
                    }
                }
            })
        case UPDATE_CHILD_REQUEST_FAILURE:
            return state

        case ADD_CHILD_IMAGE:
            return Object.assign({}, state, {
                data: {
                    ...state.data, family: {
                        ...state.data.family, childs: state.data.family.childs.map((item) => {
                            return (item.id == state.userDetails.id) ? { ...item, ...action.payload } : item
                        })
                    }
                }
            })

        case ADD_IMAGE:
            return Object.assign({}, state, {
                data: {
                    ...state.data, family: {
                        ...state.data.family, parents: state.data.family.parents.map((item) => {
                            return (item.id == action.payload.id) ? { ...item, ...action.payload } : item
                        })
                    },
                    activeUser: Object.assign({}, state.data.activeUser, action.payload)
                }
            })

        case EXIT:
            return initialState

        default:
            return state
    }
}