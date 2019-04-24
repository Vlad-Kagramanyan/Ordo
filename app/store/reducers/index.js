import { combineReducers } from 'redux';
import user from './users'
import expenses from './expenses';
import contacts from './contacts';

const reducers = combineReducers({
  user,
  expenses,
  contacts
})

export default reducers