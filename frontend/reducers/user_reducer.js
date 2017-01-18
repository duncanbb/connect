import { merge } from 'lodash';

import { RECEIVE_USER_PAGE } from '../actions/user_actions';

const UserReducer = (state = { }, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_USER_PAGE:
      return ({}, state, action.user);
    default:
      return state;
  }
};

export default UserReducer;
