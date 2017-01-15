import {RECEIVE_LOCATION} from "../actions/group_actions";
import merge from "lodash/merge";


const locationReducer = (state = {cityName: ''}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LOCATION:
      const cityName = action.location.results[1].address_components[0].long_name;
      return merge({}, state, {cityName});
    default:
      return state;
  }
};

export default locationReducer;
