import { RECEIVE_SINGLE_STORY } from '../actions/story_actions';
import { merge } from 'lodash';

const storyDetailReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_STORY:
      return Object.assign({}, state, action.story);
    default:
      return state;
  }
};

export default storyDetailReducer;
