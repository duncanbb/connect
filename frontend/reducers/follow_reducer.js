import { RECEIVE_ALL_FOLLOWS,
        RECEIVE_FOLLOW_ERRORS,
        RECEIVE_NEW_FOLLOW,
        REMOVE_FOLLOW } from '../actions/follow_actions';
import { merge } from 'lodash';

const followReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_FOLLOW:
      return Object.assign({}, state, {[action.follow.id]: action.follow}) ;
    case RECEIVE_ALL_FOLLOWS:
      return action.follows;
    case RECEIVE_FOLLOW_ERRORS:
      return merge({}, state, action.errors);
    case REMOVE_FOLLOW:
      let newState = merge({}, state);
      delete newState[action.follow.id];
      return newState;
    default:
      return state;
  }
};

export default followReducer;
