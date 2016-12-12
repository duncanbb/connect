import { merge } from 'lodash';

import {
  RECEIVE_ALL_STORIES, REMOVE_STORY,
  RECEIVE_STORY_ERRORS, RECEIVE_NEW_STORY
} from '../actions/story_actions';

const StoryReducer = (state = { stories: {}, errors:[]}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_STORIES:
      return  merge({}, state, { stories:action.stories });
    case RECEIVE_NEW_STORY:
      return merge({}, state, {
        stories: action.story
      });
    case REMOVE_STORY:
      let newState = merge({}, oldState);
      delete newState[action.stories.id];
      return newState;
    case RECEIVE_STORY_ERRORS:
      return merge({}, state, { errors:action.errors.responseJSON });
    default:
      return state;
  }
};

export default StoryReducer;
