import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, RESET_USER, CLEAR_ERRORS } from '../actions/session_actions';

const sessionReducer = ( state = { currentUser: null, errors:[]}, action ) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.user, errors: []});
    case RESET_USER:
      return merge({}, {currentUser: null, errors: []});
    case RECEIVE_ERRORS:
      return merge({},{ errors:action.errors.responseJSON });
    case CLEAR_ERRORS:
      let errors = [];
      return Object.assign({}, state, { errors });
    default:
      return state;
  }
};

export default sessionReducer;
