import { merge } from 'lodash';

import { RECEIVE_USER_PAGE } from '../actions/user_actions';

const StoryReducer = (state = { }, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_USER_PAGE:
      newState = merge({}, state);
      newState.user = action.user;
      return newState;
    default:
      return state;
  }
};

export default StoryReducer;
