import { RECEIVE_ALL_LIKES,
        RECEIVE_LIKE_ERRORS,
        RECEIVE_NEW_LIKE,
        REMOVE_LIKE } from '../actions/like_actions';
import { merge } from 'lodash';

const likeReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_LIKE:
      return Object.assign({}, state, {[action.like.id]: action.like}) ;
    case RECEIVE_ALL_LIKES:
      return action.likes;
    case RECEIVE_LIKE_ERRORS:
      return merge({}, state, action.errors);
    case REMOVE_LIKE:
      let newState = merge({}, state);
      delete newState[action.like.id];
      return newState;
    default:
      return state;
  }
};

export default likeReducer;
