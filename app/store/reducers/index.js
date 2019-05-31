import { combineReducers } from 'redux';
import user from './users'
import expenses from './expenses';
import contacts from './contacts';
import discussions from './discussions'

const reducers = combineReducers({
  user,
  expenses,
  contacts,
  discussions
})

export default reducers