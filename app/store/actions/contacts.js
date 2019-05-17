import {
    ADD_CONTACTS,
    DELETE_CONTACTS,
    GET_CONTACTS
} from '../constants/contacts';
import { Toast } from 'native-base';

import axios from 'axios';

import URL from '../../constants/url';

parseError = (errors) => {
    let msg = "";
    for (let item in errors) {
        msg += ` ${errors[item]}`
    }
    return msg
}

function showMsg(text) {
    Toast.show({
        text: text,
        buttonText: "Okay",
        duration: 5000
    })
}

export function addContacts(dispatch, data, token) {
    console.log('action contacts', data)
    axios.post(`${URL}contact`,
      data,
      { headers: { "Authorization": `Bearer ${token}` } }
    )
      .then((response) => {
        console.log('res token', response.data.data)
        showMsg("Contact added")
        dispatch({ type: ADD_CONTACTS, payload: response.data.data })
      }).catch((err) => {
        showMsg(err.response.data.message)
      })
  }

export function getContacts(dispatch, data, token) {
    console.log('actions', data)
    axios.get(`${URL}contact/${data.parent_id}`,
      { headers: { "Authorization": `Bearer ${token}` } }
    )
      .then((response) => {
        console.log('res token', response)
        dispatch({ type: GET_CONTACTS, payload: response.data.data})
      }).catch((err) => {
        showMsg(err.response.data.message)
      })
  }

  export function deleteContact(dispatch, id, token) {
    console.log('actions del', id)
    axios.delete(`${URL}contact/${id}`,
      { headers: { "Authorization": `Bearer ${token}` } }
    )
      .then((response) => {
        console.log('res token', response)
        showMsg("Contact deleted")
        dispatch({ type: GET_CONTACTS, payload: response.data.data})
      }).catch((err) => {
        showMsg(err.response.data.message)
      })
  }

  export function editContact(dispatch, data, id, token) {
    console.log('actions edit', data)
    axios.put(`${URL}contact/${id}`,
    data,
      { headers: { "Authorization": `Bearer ${token}` } }
    )
      .then((response) => {
        console.log('res token', response)
        showMsg("contact have edited")
        dispatch({ type: GET_CONTACTS, payload: response.data.data})
      }).catch((err) => {
        showMsg(err.response.data.message)
      })
  }