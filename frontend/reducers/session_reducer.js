import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS} from "../actions/session_actions";
import merge from "lodash/merge";

const _nullUser = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.currentUser});
    case CLEAR_ERRORS:
      return merge({}, state, {errors: []});
    default:
      return state;
  }
};

export default sessionReducer;
