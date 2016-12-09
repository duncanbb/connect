import { values } from 'lodash';

export const selectAllStories = (state) => {
  return values(state.story.stories);
};
