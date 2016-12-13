import { RECEIVE_STORY_COMMENTS,
        RECEIVE_NEW_COMMENT,
        RECEIVE_COMMENT_ERRORS } from '../actions/comment_actions';
import { merge } from 'lodash';

const commentReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_COMMENT:
      return merge({}, state, action.comment);
    case RECEIVE_STORY_COMMENTS:
      return merge({}, state, action.comments);
    case RECEIVE_COMMENT_ERRORS:
      return merge({}, state, action.errors);
    default:
      return state;
  }
};

export default commentReducer;
