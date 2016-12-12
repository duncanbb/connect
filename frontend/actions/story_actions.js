export const RECEIVE_SINGLE_STORY = 'RECEIVE_SINGLE_STORY';
export const RECEIVE_STORY_ERRORS = 'RECEIVE_STORY_ERRORS';
export const RECEIVE_ALL_STORIES = 'RECEIVE_ALL_STORIES';
export const REQUEST_ALL_STORIES = 'REQUEST_ALL_STORIES';
export const REQUEST_SINGLE_STORY = 'REQUEST_SINGLE_STORY';
export const CREATE_STORY = 'CREATE_STORY';
export const RECEIVE_NEW_STORY = 'RECEIVE_NEW_STORY';
export const REMOVE_STORY = 'REMOVE_STORY';

import * as APIUtil from '../util/story_api_util';

export function fetchAllStories() {
  return (dispatch) => {
    return APIUtil.fetchAllStories()
      .then(stories => dispatch(receiveAllStories(stories)));
  };
}

export function fetchSingleStory(id) {
  return (dispatch) => {
    dispatch(requestSingleStory(id));
    return APIUtil.fetchSingleStory(id)
      .then(story => { dispatch(receiveSingleStory(story));
      return story;
    });
  };
}

export function createStory(story) {
  return (dispatch) => {
    return APIUtil.createStory(story).then(story => {
      dispatch(receiveNewStory(story));
      return story;
    }, errors => {
      dispatch(receiveStoryErrors(errors));
    });
  };
}

export const requestAllStories = () => ({
  type: REQUEST_ALL_STORIES
});

export const requestSingleStory = () => ({
  type: REQUEST_SINGLE_STORY
});

export const receiveAllStories = (stories) => ({
  type:RECEIVE_ALL_STORIES,
  stories
});

export const receiveSingleStory = story => ({
  type: RECEIVE_SINGLE_STORY,
  story
});

export const removeStory = story => ({
  type: REMOVE_STORY,
  story
});

export const receiveNewStory = story => ({
  type: RECEIVE_NEW_STORY,
  story
});

export const receiveStoryErrors = errors => ({
  type: RECEIVE_STORY_ERRORS,
  errors
});
