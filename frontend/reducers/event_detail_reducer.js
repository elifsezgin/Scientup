import {RECEIVE_EVENT} from "../actions/event_actions";
import merge from "lodash/merge";


const eventDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_EVENT:
      return action.event;
    default:
      return state;
  }
};

export default eventDetailReducer;
