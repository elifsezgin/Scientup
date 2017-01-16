import {RECEIVE_GROUP, ADD_IMAGE} from "../actions/group_actions";
import merge from "lodash/merge";


const groupDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_GROUP:
      return merge({}, state, action.group);
    case ADD_IMAGE:
      return merge({}, state, {image_url: action.image});
    default:
      return state;
  }
};

export default groupDetailReducer;
