import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from "../actions/session_actions";
import merge from "lodash/merge";

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const sessionReducer = (state = _nullUser, action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.currentUser});
    default:
      return state;
  }
};

export default sessionReducer;
