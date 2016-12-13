import { values } from 'lodash';

export const selectAllStories = (state) => {
  return values(state.stories);
};

export const selectStoryDetail = (state) => {
  return (state.storyDetail);
};

export const selectComments = (state, storyId) => {
  const comments = [];
  Object.keys(state.comments).forEach(commentId=>{
    const comment = state.comments[commentId];
    if (comment.story_id === storyId){
      commments.push(comment);
    }
  });
  return comments;
};
