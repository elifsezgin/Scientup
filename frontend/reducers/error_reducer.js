import {RECEIVE_ERRORS, CLEAR_ERRORS} from "../actions/session_actions";
import merge from "lodash/merge";


const ErrorReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
    debugger
    
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ErrorReducer;
