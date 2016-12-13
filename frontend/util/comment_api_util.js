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

export const deleteComment = (comment) => {
  const id = comment.id;
  return $.ajax({
      method: 'DELETE',
      url: `/api/comments/${id}`,
  });
};


export const fetchAllComments = () => {
  return $.ajax({
      method: 'GET',
      url: '/api/comments/'
  });
};
