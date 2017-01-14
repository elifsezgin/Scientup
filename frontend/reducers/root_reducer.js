import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import groupReducer from './group_reducer';
import groupDetailReducer from './group_detail_reducer';

export default combineReducers({
  session: sessionReducer,
  groups: groupReducer,
  groupDetail: groupDetailReducer,
});
