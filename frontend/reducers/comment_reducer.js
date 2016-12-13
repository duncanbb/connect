import { RECEIVE_ALL_COMMENTS,
        RECEIVE_COMMENT_ERRORS,
        RECEIVE_NEW_COMMENT,
        REMOVE_COMMENT } from '../actions/comment_actions';
import { merge } from 'lodash';

const commentReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_COMMENT:
      return Object.assign({}, state, {[action.comment.id]: action.comment}) ;
    case RECEIVE_ALL_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT_ERRORS:
      return merge({}, state, action.errors);
    case REMOVE_COMMENT:
      let newState = merge({}, state);
      delete newState[action.comment.id];
      return newState;
    default:
      return state;
  }
};

export default commentReducer;
