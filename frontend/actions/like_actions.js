export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';
export const RECEIVE_NEW_LIKE = 'RECEIVE_NEW_LIKE';
export const RECEIVE_LIKE_ERRORS = 'RECEIVE_LIKE_ERRORS';
export const REMOVE_LIKE = 'REMOVE_LIKE';
import * as APIUtil from '../util/like_api_util';
import { receiveNewStory, receiveSingleStory } from './story_actions';


export const receiveAllLikes = (likes) => ({
  type: RECEIVE_ALL_LIKES,
  likes,
});

export const receiveNewLike = like => ({
  type: RECEIVE_NEW_LIKE,
  like
});


export const receiveLikeErrors = errors => ({
  type: RECEIVE_LIKE_ERRORS,
  errors
});

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});

export function createLike(like) {
  return (dispatch) => {
    return APIUtil.createLike(like).then(story => {
      dispatch(receiveNewStory(story));
      dispatch(receiveSingleStory(story));
      return story;
    }, errors => {
      dispatch(receiveLikeErrors(errors));
    });
  };
}

export function fetchAllLikes(){
  return (dispatch) => {
    return APIUtil.fetchAllLikes()
    .then(likes => dispatch(receiveAllLikes(likes)));
  };
}


export function deleteLike(like) {
  return (dispatch) => {
    return APIUtil.deleteLike(like).then(story => {
      dispatch(receiveNewStory(story));
      dispatch(receiveSingleStory(story));
      return story;
    }, errors => {
      dispatch(receiveLikeErrors(errors));
    });
  };
}
