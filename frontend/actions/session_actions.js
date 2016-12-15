export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RESET_USER = 'RESET_USER';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';


import * as SessionAPIUtil from '../util/session_api_util.js';

export function signInUser(user) {
  return (dispatch) => {
    return SessionAPIUtil.signin(user).then(user => {
      dispatch(receiveCurrentUser(user));
      return user;
    }, errors => {
        dispatch(receiveErrors(errors));
    });
  };
}

export function signUp(user) {
  return (dispatch) => {
    return SessionAPIUtil.signup(user).then(user=>
    dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors)));
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

export const openModal = () => ({
  type: OPEN_MODAL,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});
