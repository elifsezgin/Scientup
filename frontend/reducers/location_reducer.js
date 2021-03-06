import {RECEIVE_LOCATION} from "../actions/group_actions";
import merge from "lodash/merge";

const _nullState = {
  cityName: 'San Francisco',
  lat: 37.773972,
  lng: -122.431297,
  bounds: [],
};

const locationReducer = (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LOCATION:
      let cityName = '';
      let lat = '';
      let lng = '';
      let bounds = [];
      if (action.location.results[0]) {
        cityName = action.location.results[0].address_components[1].long_name;
        lat = parseInt(action.location.results[0].geometry.location.lat);
        lng = parseInt(action.location.results[0].geometry.location.lng);
        bounds = action.location.results[0].geometry.bounds;
      }
      return {cityName, lat, lng, bounds};
    default:
      return state;
  }
};

export default locationReducer;
