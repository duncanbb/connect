import { values, flatten } from 'lodash';

export const selectAllStories = (state) => {
  if (state.session.currentUser !== null) {
    const id = state.session.currentUser.id;
    let follows = userFollows(state, id);
    let collected =
    follows.map(follow => storiesByAuthorId(state, follow.author_id));
    return flatten(collected);
  } else {
    return values(state.stories);
  }
};

export const selectStoryDetail = (state) => {
  return (state.storyDetail);
};

export const selectComments = (state, storyId) => {
  return values(state.comments)
  .filter(comment => comment.story_id === parseInt(storyId));
};

export const userFollows = (state, userId) => {
  return values(state.follows)
  .filter(follow => follow.follower_id === parseInt(userId));
};

export const storiesByAuthorId = (state, author_id) => {
  return values(state.stories)
  .filter(story => story.author_id === parseInt(author_id));
};
