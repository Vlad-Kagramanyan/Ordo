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
  ADD_CHILD_DETAILS,
  ADD_PARENT_DETAILS,
  ADD_IMAGE
} from '../constants/users';

import axios from 'axios';

parseError = (errors) => {
  let msg = "";
  for (let item in errors) {
    msg += ` ${errors[item]}`
  }
  return msg
}

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY2M2E0NTk2OWRkMDM2MDhjYmUyMzlkM2U3MmFlYjAyOWJhZWY5ZWYxOWExNDIwNDJmNmJhZGZjMDkxNDI0M2FkZTlmMjMxMWMzYzViZWIxIn0.eyJhdWQiOiIxIiwianRpIjoiNjYzYTQ1OTY5ZGQwMzYwOGNiZTIzOWQzZTcyYWViMDI5YmFlZjllZjE5YTE0MjA0MmY2YmFkZmMwOTE0MjQzYWRlOWYyMzExYzNjNWJlYjEiLCJpYXQiOjE1NTIyOTQ4ODUsIm5iZiI6MTU1MjI5NDg4NSwiZXhwIjoxNTgzOTE3Mjg1LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.Y1IIQlOqT6jDHnXmfM5mDslJtJFyoJmDGO7UIowWoTCi8m0mS14glvuTOp2-H0yWnjnANWRxeqnHOohSmlK5F-l4DcOtaYxfpL68a56Z1isAegXvaJXmZFgR35ldG8RKsvlAlaTcJPHg745ChTe2PqlDuX2bWw0jIAGh9e_vCy3WKdYq6_HVbImkt1_qR_SxaHvRu4wIMiRxOxIhUQYBcvWE08Nj9LGSlbjRZRO8Hx27iIhdeSu7crUNflgb8LgaUjhMzVDjqc28OD1etSIHxbv3F2yRDUv5HLpNUPMpp6bWUAKSSJGgtKqNleBxDDC7CTpKhG-lkV6-smVC2XHvXsE7jV0bERfKKcqjpewDswBSCaH-GPcO-ru68-f6t1r-Rbg2YD_Ee0Shurjgp0V9oJ1T21FpWlrBZTrbRNIQimImoacHjxPDQmnX3_AoQh39qMReQny3lXetoqoohtLCIcJLrYqytO7WKGDRb8Wdneaw8NOVKFZKQcBR4o0PlCeupB7JRQckSKLaruZ-jwpiADtSApYNfy7LmfsugafDNjfEBMHeKyvEVr6rhlW4L6sQJCjNZo1Ig8RemMZ26le-F9goB2vnbVXYLr2VkztSv-NTLdzmMGhPMG1hnY41-54jOaKQJ_CQA8tsD60V3GnxCJabmfKc8jCbHa2qmmbw-tU"

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

export function parentRequest(dispatch, data) {
  dispatch({ type: PARENT_REQUEST })
  const requestData = {
    first_name: data.first_name,
      last_name: data.last_name,
      gender: data.gender,
      birth_date: data.date,
      country: data.country,
      religion: data.religion,
      calendar: data.calendar,
      family_id: '',
      google_id: data.google_id,
      email: data.email,
      token: data.token
  }

  if (data.parentCount == 1) {
    datas.family_id = ""
    datas.calendar = data.calendar
  }
  axios.post('http://myworks.site/dev/calendar_based_api/public/api/register',
    requestData
  )
    .then((response) => {
      dispatch({ type: PARENT_REQUEST_SUCCESS, payload: response.data.success })
    }).catch((err) => {
      let msg = parseError(err.response.data.message)
      dispatch({ type: PARENT_REQUEST_FAILURE, payload: msg })
    })
}

export function addParentRequest(dispatch, data) {
  dispatch({ type: ADD_PARENT_REQUEST })
  let datas = {
    first_name: data.first_name,
    last_name: data.last_name,
    gender: data.gender,
    birth_date: data.date,
    country: data.country,
    religion: data.religion,
    family_id: '',
    google_id: data.google_id,
    email: data.email
  };
  if (data.parentCount == 1) {
    datas.family_id = ""
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


export function childRequest(dispatch, data) {
  dispatch({ type: CHILD_REQUEST })
  axios.post('http://myworks.site/dev/calendar_based_api/public/api/child',
    {
      first_name: data.first_name,
      last_name: data.last_name,
      gender: data.gender,
      birth_date: data.date,
    },
    { headers: { "Authorization": `Bearer ${token}` } }
  )
    .then((response) => {
      dispatch({ type: CHILD_REQUEST_SUCCESS, payload: response.data.data })
    }).catch((err) => {
      let msg = parseError(err.response.data.message)
      dispatch({ type: CHILD_REQUEST_FAILURE, payload: msg })
    })
}

export function addChildRequest(dispatch, data) {
  dispatch({ type: ADD_CHILD_REQUEST })
  axios.post('http://myworks.site/dev/calendar_based_api/public/api/child',
    {
      first_name: data.first_name,
      last_name: data.last_name,
      gender: data.gender,
      birth_date: data.date,
    },
    { headers: { "Authorization": `Bearer ${token}` } }
  )
    .then((response) => {
      dispatch({ type: ADD_CHILD_REQUEST_SUCCESS, payload: response.data.data })
    }).catch((err) => {
      let msg = parseError(err.response.data.message)
      dispatch({ type: ADD_CHILD_REQUEST_FAILURE, payload: msg })
    })
}


export function weekRequest(dispatch, data) {
  console.log('actions')
  // dispatch({ type: WEEK_REQUEST })
  axios.post('http://myworks.site/dev/calendar_based_api/public/api/visitation',
    {
      childs: data
    },
    { headers: { "Authorization": `Bearer ${token}` } }
  )
    .then((response) => {
      console.log('res token', response)
      // dispatch({ type: WEEK_REQUEST_SUCCESS, payload: 'data' })
    }).catch((err) => {
      console.log('error', err)
      let msg = parseError(err.response.data.message)
      console.log('msgg', msg)
      // dispatch({ type: WEEK_REQUEST_FAILURE, payload: msg })
    })
}


export function changeUserData(dispatch, data) {
  console.log('actions', data)
  // dispatch({ type: UPDATE_USER_REQUEST })
  // axios.post('http://myworks.site/dev/calendar_based_api/public/api/users/update',
  //   {
  //      data
  //   },
  //   { headers: { "Authorization": `Bearer ${token}` } }
  // )
  //   .then((response) => {
  //     console.log('res token', response)
  //     // dispatch({ type: UPDATE_USER_REQUEST_SUCCESS, payload: 'data' })
  //   }).catch((err) => {
  //     console.log('error', err)
  //     let msg = parseError(err.response.data.message)
  //     console.log('msgg', msg)
  //     // dispatch({ type: UPDATE_USER_REQUEST_FAILURE, payload: msg })
  //   })
}

export function parentDetails(dispatch, id) {
  console.log('actions', id)
       dispatch({ type: ADD_PARENT_DETAILS, payload: id })
}

export function childDetails(dispatch, id) {
  console.log('actions', id)
      dispatch({ type: ADD_CHILD_DETAILS, payload: id })
}
export function uploadimage(dispatch, img) {
  console.log('action', img)
      dispatch({ type: ADD_IMAGE, payload: img })
}