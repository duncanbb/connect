export const RECEIVE_ALL_FOLLOWS = 'RECEIVE_ALL_FOLLOWS';
export const RECEIVE_NEW_FOLLOW = 'RECEIVE_NEW_FOLLOW';
export const RECEIVE_FOLLOW_ERRORS = 'RECEIVE_FOLLOW_ERRORS';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';
import * as APIUtil from '../util/follow_api_util';
import { receiveCurrentUser } from './session_actions';


export const receiveAllFollows = (follows) => ({
  type: RECEIVE_ALL_FOLLOWS,
  follows,
});

export const receiveNewFollow = follow => ({
  type: RECEIVE_NEW_FOLLOW,
  follow
});


export const receiveFollowErrors = errors => ({
  type: RECEIVE_FOLLOW_ERRORS,
  errors
});

export const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
});

export function createFollow(follow) {
  return (dispatch) => {
    return APIUtil.createFollow(follow).then(follow => {
      dispatch(receiveNewFollow(follow));
    }, errors => {
      dispatch(receiveFollowErrors(errors));
    });
  };
}

export function fetchAllFollows(){
  return (dispatch) => {
    return APIUtil.fetchAllFollows()
    .then(follows => dispatch(receiveAllFollows(follows)));
  };
}


export function deleteFollow(follow) {
  return (dispatch) => {
    return APIUtil.deleteFollow(follow).then(follow => {
      dispatch(removeFollow(follow));
    }, errors => {
      dispatch(receiveFollowErrors(errors));
    });
  };
}
