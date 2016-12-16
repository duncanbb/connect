import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, RESET_USER,
        CLEAR_ERRORS, OPEN_MODAL, CLOSE_MODAL } from '../actions/session_actions';

const sessionReducer = ( state = { currentUser: null, errors:[], openModal:false }, action ) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.user, errors: []});
    case RESET_USER:
      return merge({}, state, {currentUser: null, errors: []});
    case RECEIVE_ERRORS:
      return merge({}, state, { errors:action.errors.responseJSON });
    case CLEAR_ERRORS:
      let errors = [];
      return Object.assign({}, state, { errors });
    case OPEN_MODAL:
      const openModal = { openModal: true };
      return Object.assign({}, state, openModal);
    case CLOSE_MODAL:
      const closeModal = { openModal: false };
      return Object.assign({}, state, closeModal);
    default:
      return state;
  }
};

export default sessionReducer;
