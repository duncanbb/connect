import { merge } from 'lodash';

import {
  RECEIVE_ALL_STORIES, RECEIVE_SINGLE_STORY, REMOVE_STORY,
  RECEIVE_STORY_ERRORS, RECEIVE_NEW_STORY
} from '../actions/story_actions';

const StoryReducer = (state = { errors:[]}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_STORIES:
      return merge({}, action.stories);
    case RECEIVE_SINGLE_STORY:
    case RECEIVE_NEW_STORY:
      return merge({}, state, {
        [action.story.id]: action.story
      });
    case REMOVE_STORY:
      let newState = merge({}, oldState);
      delete newState[action.story.id];
      return newState;
    case RECEIVE_STORY_ERRORS:
      return merge({}, state, { errors:action.errors.responseJSON });
    default:
      return state;
  }
};

export default StoryReducer;
