import * as GroupsAPIUtil from "../util/groups_api_util";

export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';
export const ADD_IMAGE = "ADD_IMAGE";

export const addImage = (image) => ({
  type: ADD_IMAGE,
  image
});

export const receiveGroups = (groups) => ({
  type: RECEIVE_GROUPS,
  groups
});

export const receiveGroup = (group) => ({
  type: RECEIVE_GROUP,
  group
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveLocation = (location) => ({
  type: RECEIVE_LOCATION,
  location
});

export const requestAllGroups = () => dispatch => (
  GroupsAPIUtil.groupsSearch().then(groups => dispatch(receiveGroups(groups)))
);

export const requestGroup = (id) => dispatch => (
  GroupsAPIUtil.requestGroup(id).then(group => {
      return(dispatch(receiveGroup(group)));
    }
  )
);

export const createGroup = (group) => dispatch => (
  GroupsAPIUtil.createGroup(group).then(data => (
      dispatch(receiveGroup(data))),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const deleteGroup = (id) => dispatch => (
  GroupsAPIUtil.deleteGroup(id).then(data => (
      dispatch(receiveGroups(data))))
);

export const addMember = (info) => dispatch => (
  GroupsAPIUtil.addMember(info).then(data => (
      dispatch(receiveGroup(data))))
);

export const deleteMember = (id) => dispatch => (
  GroupsAPIUtil.deleteMember(id).then(data => (
      dispatch(receiveGroup(data))), err => dispatch(receiveErrors(err.responseJSON)))
);

export const getLocation = (lat, lon) => dispatch => (
  GroupsAPIUtil.getLocation(lat, lon).then(location => (
    dispatch(receiveLocation(location)),
    err => dispatch(receiveErrors(err.responseJSON))
    )
  )
);
