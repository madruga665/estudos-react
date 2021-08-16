import { combineReducers } from 'redux';
import clickReducer from './clickReducer';

const rootReducer = combineReducers({
  clickState: clickReducer,
});

export default rootReducer;
