import {
    ADD_EXPENSES,
    DELETE_EXPENSES,
    CLEAR_EXPENSES,
    GET_EXPENSES
} from '../constants/expenses';
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

export function addExpense(dispatch, data, token) {
    console.log('action addexpense', data)
    axios.post(`${URL}expenses`,
      data,
      { headers: { "Authorization": `Bearer ${token}` } }
    )
      .then((response) => {
        console.log('res token', response.data)
        showMsg("expense added")
        dispatch({ type: ADD_EXPENSES, payload: response.data.expenses })
      }).catch((err) => {
        showMsg(err.response.data.message)
        // dispatch({ type: LOGIN_REQUEST_FAILURE, payload: err.response.data.message })
      })
  }

export function getExpenses(dispatch, data, token) {
    console.log('actions')
    dispatch({ type: CLEAR_EXPENSES})
    axios.post(`${URL}expensesChild`,
        data,
      { headers: { "Authorization": `Bearer ${token}` } }
    )
      .then((response) => {
        console.log('res token', response)
        dispatch({ type: GET_EXPENSES, payload: response.data.expenses})
      }).catch((err) => {
        showMsg(err.response.data.message)
        // dispatch({ type: DELETE_EXPENSES, payload: err.response.data.message })
      })
  }