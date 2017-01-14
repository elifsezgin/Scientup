import * as GroupsAPIUtil from "../util/groups_api_util";

export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';

export const receiveGroups = (groups) => ({
  type: RECEIVE_GROUPS,
  groups
});

export const receiveGroup = (group) => ({
  type: RECEIVE_GROUP,
  group
});

export const requestAllGroups = () => dispatch => (
  GroupsAPIUtil.allGroups().then(groups => dispatch(receiveGroups(groups)))
);

export const requestGroup = (id) => dispatch => (
  GroupsAPIUtil.requestGroup(id).then(group => {
    return(dispatch(receiveGroup(group)));
  }
  )


);
