import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import groupReducer from './group_reducer';
import locationReducer from './location_reducer';
import errorReducer from './error_reducer';
import groupDetailReducer from './group_detail_reducer';

export default combineReducers({
  session: sessionReducer,
  groups: groupReducer,
  groupDetail: groupDetailReducer,
  location: locationReducer,
  errors: errorReducer,
});
