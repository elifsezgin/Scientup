import * as GroupsAPIUtil from "../util/groups_api_util";

export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';

export const receiveGroups = (groups) => ({
  type: RECEIVE_GROUPS,
  groups
});

export const requestAllGroups = () => dispatch => (
  GroupsAPIUtil.allGroups().then(groups => dispatch(receiveGroups)(groups))
);
