import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import groupReducer from './group_reducer';

export default combineReducers({
  session: sessionReducer,
  groups: groupReducer
});
