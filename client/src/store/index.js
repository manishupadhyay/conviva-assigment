import { employeeReducer } from '../reducers/employeeDetailsReducer';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';

export const store = createStore(
  employeeReducer,
  initialState,
  applyMiddleware(thunk)
);

