export const createComment = (comment) => {
  return $.ajax({
      method: 'POST',
      url: '/api/comments/',
      data: { comment },
  });
};

export const updateComment = (comment) => {
  const id = comment.id;
  return $.ajax({
    method: 'PATCH',
    url:`/api/comments/${id}`,
    data: { comment },
  });
};

export const deleteStory = (story) => {
  const id = story.id;
  return $.ajax({
      method: 'DELETE',
      url: `/api/stories/${id}`,
  });
};
