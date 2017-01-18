import * as GroupsAPIUtil from '../util/groups_api_util';
import {receiveGroups} from './group_actions';
export const UPDATE_SEARCH = "UPDATE_SEARCH";

export const updateSearch = (searchType, searchInput) => dispatch => {
  dispatch(changeSearch(searchType, searchInput));
  if (searchType === 'groups') {
    GroupsAPIUtil.groupsSearch({searchInput}).then(data => dispatch(receiveGroups(data)));
  }
};

export const changeSearch = (searchType, searchInput) => ({
  type: UPDATE_SEARCH,
  searchType,
  searchInput
});
