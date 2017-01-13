import {RECEIVE_GROUPS} from "../actions/group_actions";
import merge from "lodash/merge";


const groupReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_GROUPS:
      debugger;
      return merge({}, state, action.groups);
    default:
      return state;
  }
};

export default groupReducer;
