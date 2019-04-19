import { combineReducers } from 'redux';
import user from './users'
import expenses from './expenses';

const reducers = combineReducers({
  user,
  expenses
})

export default reducers