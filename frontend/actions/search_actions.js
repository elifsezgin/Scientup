import * as GroupsAPIUtil from '../util/groups_api_util';
import * as EventsAPIUtil from '../util/events_api_util';
import {receiveGroups} from './group_actions';
import {receiveEvents} from './event_actions';
export const UPDATE_SEARCH = "UPDATE_SEARCH";

export const updateSearch = (searchType, searchInput) => dispatch => {
  dispatch(changeSearch(searchType, searchInput));
  if (searchType === 'groups') {
    GroupsAPIUtil.groupsSearch({searchInput}).then(data => dispatch(receiveGroups(data)));
  } else {
    EventsAPIUtil.eventsSearch({searchInput}).then(data => dispatch(receiveEvents(data)));
  }
};

export const changeSearch = (searchType, searchInput) => ({
  type: UPDATE_SEARCH,
  searchType,
  searchInput
});
