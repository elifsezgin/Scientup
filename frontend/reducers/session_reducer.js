import {RECEIVE_CURRENT_USER, RECEIVE_PROFILE} from "../actions/session_actions";
import merge from "lodash/merge";

const _nullUser = {
  currentUser: null,
  profile: null
};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.currentUser});
    case RECEIVE_PROFILE:
      return merge({}, state, {profile: action.profile});
    default:
      return state;
  }
};

export default sessionReducer;
