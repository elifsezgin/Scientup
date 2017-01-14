import {RECEIVE_GROUP} from "../actions/group_actions";
import merge from "lodash/merge";


const groupDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_GROUP:
      return merge({}, state, action.group);
    default:
      return state;
  }
};

export default groupDetailReducer;
