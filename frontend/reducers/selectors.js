import { values } from 'lodash';

export const selectAllStories = (state) => {
  return values(state.story.stories);
};

export const selectStoryDetail = (state) => {
  return (state.storyDetail);
};
