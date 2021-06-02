import { clickReducer } from './clickReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  clickState: clickReducer,
});