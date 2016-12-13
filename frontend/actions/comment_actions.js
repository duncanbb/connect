export const RECEIVE_STORY_COMMENTS = 'RECEIVE_STORY_COMMENTS';
export const RECEIVE_NEW_COMMENT = 'RECEIVE_NEW_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
import * as APIUtil from '../util/comment_api_util';


export const receiveStoryComments = (comments) => ({
  type: RECEIVE_STORY_COMMENTS,
  comments,
});

export const receiveNewComment = comment => ({
  type: RECEIVE_NEW_STORY,
  comment
});


export const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export function createComment(comment) {
  return (dispatch) => {
    return APIUtil.createComment(comment).then(comment => {
      dispatch(receiveNewComment(comment));
      return comment;
    }, errors => {
      dispatch(receiveCommentErrors(errors));
    });
  };
}

export function updateComment(comment) {
  return (dispatch) => {
    return APIUtil.updateComment(comment).then(comment => {
      dispatch(receiveNewComment(comment));
      return comment;
    }, errors => {
      dispatch(receiveCommentErrors(errors));
    });
  };
}
