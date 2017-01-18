import {UPDATE_SEARCH} from "../actions/search_actions";
import merge from "lodash/merge";


const searchReducer = (state = {searchType: '', searchInput: ''}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_SEARCH:

      return merge({}, state, { searchType: action.searchType, searchInput: action.searchInput });
    default:
      return state;
  }
};

export default searchReducer;
