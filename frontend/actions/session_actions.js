export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RESET_USER = 'RESET_USER';

import * as SessionAPIUtil from '../util/session_api_util.js';

export function loginUser(user) {
  return (dispatch) => {
    return SessionAPIUtil.login(user).then(user => {
      dispatch(receiveCurrentUser(user));
      return user;
    });
  };
}

export function signUp(user) {
  return (dispatch) => {
    return SessionAPIUtil.signup(user).then(user=>
    dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)));
  };
}

export function logout() {
  return (dispatch) => {
    return SessionAPIUtil.logout().then(
      () => dispatch(resetUser())
  );};
}

export const resetUser = () => ({
  type: RESET_USER,
});

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});
