export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_NEW_COMMENT = 'RECEIVE_NEW_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
import * as APIUtil from '../util/comment_api_util';


export const receiveAllComments = (comments) => ({
  type: RECEIVE_ALL_COMMENTS,
  comments,
});

export const receiveNewComment = comment => ({
  type: RECEIVE_NEW_COMMENT,
  comment
});


export const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
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

export function fetchAllComments(){
  return (dispatch) => {
    return APIUtil.fetchAllComments()
    .then(comments => dispatch(receiveAllComments(comments)));
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

export function deleteComment(comment) {
  return (dispatch) => {
    return APIUtil.deleteComment(comment).then(comment => {
      dispatch(removeComment(comment));
      return comment;
    }, errors => {
      dispatch(receiveCommentErrors(errors));
    });
  };
}
