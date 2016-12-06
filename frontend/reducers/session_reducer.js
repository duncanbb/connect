import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, RESET_USER } from '../actions/session_actions';

const sessionReducer = ( state = { currentUser: null, errors:[]}, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.user});
    case RESET_USER:
      return merge({}, state, {currentUser: null});
    case RECEIVE_ERRORS:
      return merge({}, state, action.errors);
    default:
      return state;
  }
};

export default sessionReducer;
