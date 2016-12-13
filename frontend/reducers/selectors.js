import { values } from 'lodash';

export const selectAllStories = (state) => {
  return values(state.stories);
};

export const selectStoryDetail = (state) => {
  return (state.storyDetail);
};


export const selectComments = (state, storyId) => {
  return values(state.comments)
  .filter(comment => comment.story_id === parseInt(storyId));
};
