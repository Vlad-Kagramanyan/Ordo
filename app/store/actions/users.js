import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILURE,
  PARENT_REQUEST,
  PARENT_REQUEST_SUCCESS,
  PARENT_REQUEST_FAILURE,
  ADD_PARENT_REQUEST,
  ADD_PARENT_REQUEST_SUCCESS,
  ADD_PARENT_REQUEST_FAILURE,
  REGiSTER_REQUEST,
  REGiSTER_REQUEST_SUCCESS,
  REGiSTER_REQUEST_FAILURE,
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
  ADD_IMAGE
} from '../constants/users';
import { Toast } from 'native-base';

import axios from 'axios';

parseError = (errors) => {
  let msg = "";
  for (let item in errors) {
    msg += ` ${errors[item]}`
  }
  return msg
}


export function registerRequest(dispatch, data) {
  dispatch({ type: REGiSTER_REQUEST_SUCCESS, payload: data })
}


export function loginRequest(dispatch, data) {
  dispatch({ type: LOGIN_REQUEST })
  axios.post('http://myworks.site/dev/calendar_based_api/public/api/login', { email: data.email, password: data.password }
  )
    .then((response) => {
      console.log('res token', response.data)
      dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: response.data })
    }).catch((err) => {
      console.log('error 10', err.response.data.message)
      dispatch({ type: LOGIN_REQUEST_FAILURE, payload: err.response.data.message })
    })
}

export function parentRequest(dispatch, data, token) {
  dispatch({ type: PARENT_REQUEST })
  const requestData = {
    first_name: data.first_name,
    last_name: data.last_name,
    gender: data.gender,
    birth_date: data.date,
    country: data.country,
    religion: data.religion,
    calendar: data.calendar,
    family_id: data.family_id || '',
    google_id: data.google_id,
    email: data.email,
    token: data.token,
  }

  if (data.parentCount == 1) {
    requestData.calendar = data.calendar
  }
  console.log('req data', requestData, data.parentCount)
  axios.post('http://myworks.site/dev/calendar_based_api/public/api/register',
    requestData,
    { headers: { "Authorization": `Bearer ${token}` } }
  )
    .then((response) => {
      dispatch({ type: PARENT_REQUEST_SUCCESS, payload: response.data.success })
    }).catch((err) => {
      let msg = parseError(err.response.data.message)
      dispatch({ type: PARENT_REQUEST_FAILURE, payload: msg })
    })
}

export function addParentRequest(dispatch, data, token) {
  dispatch({ type: ADD_PARENT_REQUEST })
  let datas = {
    first_name: data.first_name,
    last_name: data.last_name,
    gender: data.gender,
    birth_date: data.date,
    country: data.country,
    religion: data.religion,
    family_id: data.family_id || '',
    google_id: data.google_id,
    email: data.email
  };
  if (data.parentCount == 1) {
    datas.calendar = data.calendar
  }
  axios.post('http://myworks.site/dev/calendar_based_api/public/api/register',
    datas,
    { headers: { "Authorization": `Bearer ${token}` } }
  )
    .then((response) => {
      dispatch({ type: ADD_PARENT_REQUEST_SUCCESS, payload: response.data.success })
    }).catch((err) => {
      let msg = parseError(err.response.data.message)
      dispatch({ type: ADD_PARENT_REQUEST_FAILURE, payload: msg })
    })
}


export function childRequest(dispatch, data, token) {
  dispatch({ type: CHILD_REQUEST })
  axios.post('http://myworks.site/dev/calendar_based_api/public/api/child',
    {
      first_name: data.first_name,
      last_name: data.last_name,
      gender: data.gender,
      birth_date: data.date,
      family_id: data.family_id
    },
    { headers: { "Authorization": `Bearer ${token}` } }
  )
    .then((response) => {
      console.log('res token', response)
      dispatch({ type: CHILD_REQUEST_SUCCESS, payload: response.data.data })
    }).catch((err) => {
      let msg = parseError(err.response.data.message)
      dispatch({ type: CHILD_REQUEST_FAILURE, payload: msg })
    })
}

export function addChildRequest(dispatch, data, token) {
  dispatch({ type: ADD_CHILD_REQUEST })
  axios.post('http://myworks.site/dev/calendar_based_api/public/api/child',
    {
      first_name: data.first_name,
      last_name: data.last_name,
      gender: data.gender,
      birth_date: data.date,
      family_id: data.family_id
    },
    { headers: { "Authorization": `Bearer ${token}` } }
  )
    .then((response) => {
      console.log('res token', response)
      dispatch({ type: ADD_CHILD_REQUEST_SUCCESS, payload: response.data.data })
      Toast.show({
        text: "success saved!",
        buttonText: "Ok",
        duration: 10000
      })
    }).catch((err) => {
      let msg = parseError(err.response.data.message)
      dispatch({ type: ADD_CHILD_REQUEST_FAILURE, payload: msg })
    })
}


export function weekRequest(dispatch, data, token) {
  console.log('actions')
  dispatch({ type: LOGIN_REQUEST })
  axios.post('http://myworks.site/dev/calendar_based_api/public/api/visitation',
    {
      childs: data
    },
    { headers: { "Authorization": `Bearer ${token}` } }
  )
    .then((response) => {
      console.log('res token', response.data)
      dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: response.data })
    }).catch((err) => {
      console.log('error 10', err.response.data.message)
      dispatch({ type: LOGIN_REQUEST_FAILURE, payload: err.response.data.message })
    })
}


export function changeUserData(dispatch, data, token) {
  console.log('actions', token)
  dispatch({ type: UPDATE_USER_REQUEST })
  axios.post('http://myworks.site/dev/calendar_based_api/public/api/users/update',
    data,
    { headers: { "Authorization": `Bearer ${token}` } }
  )
    .then((response) => {
      console.log('res token', response)
      dispatch({ type: UPDATE_USER_REQUEST_SUCCESS, payload: data })
      Toast.show({
        text: "changes is saved!",
        buttonText: "Ok",
        duration: 10000
      })
    }).catch((err) => {
      console.log('errorrrrrr', err)
      let msg = parseError(err.response.data.message)
      dispatch({ type: UPDATE_USER_REQUEST_FAILURE, payload: msg })
    })
}


export function changeChlidData(dispatch, data, token) {
  console.log('actions', token)
  dispatch({ type: UPDATE_CHILD_REQUEST })
  axios.post('http://myworks.site/dev/calendar_based_api/public/api/childUpdate',
    data,
    { headers: { "Authorization": `Bearer ${token}` } }
  )
    .then((response) => {
      console.log('res token', response)
      dispatch({ type: UPDATE_CHILD_REQUEST_SUCCESS, payload: data })
      Toast.show({
        text: "changes is saved!",
        buttonText: "Ok",
        duration: 10000
      })
    }).catch((err) => {
      console.log('errorrrrrr', err)
      let msg = parseError(err.response.data.message)
      dispatch({ type: UPDATE_CHILD_REQUEST_FAILURE, payload: msg })
      Toast.show({
        text: msg,
        buttonText: "Ok",
        duration: 10000
      })
    })
}

export function parentDetails(dispatch, id) {
  console.log('actions', id)
  dispatch({ type: ADD_PARENT_DETAILS, payload: id })
}

export function childDetails(dispatch, id) {
  console.log('actions', id)
  dispatch({ type: ADD_CHILD_DETAILS, payload: id })
}

export function uploadimage(dispatch, data) {
  console.log('action upload', data)
  dispatch({ type: ADD_IMAGE, payload: { avatar: data.img, id: data.id } })
}

export function uploadChildimage(dispatch, img) {
  console.log('action upload', img)
  dispatch({ type: ADD_CHILD_IMAGE, payload: { avatar: img } })
}
