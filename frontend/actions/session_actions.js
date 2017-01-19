import * as SessionAPIUtil from "../util/session_api_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_PROFILE = "RECEIVE_PROFILE";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveProfile = (profile) => ({
  type: RECEIVE_PROFILE,
  profile
});

export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(data => dispatch(receiveCurrentUser(data)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(data => dispatch(receiveCurrentUser(null)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(data => dispatch(receiveCurrentUser(data)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const editUser = user => dispatch => (
  SessionAPIUtil.editUser(user).then(data => dispatch(receiveCurrentUser(user)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestProfile = id => dispatch => (
  SessionAPIUtil.getUser(id).then(user => dispatch(receiveProfile(user)))
);
