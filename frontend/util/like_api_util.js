export const createLike = (like) => {
  return $.ajax({
      method: 'POST',
      url: '/api/likes/',
      data: { like },
  });
};


export const deleteLike = (like) => {
  const id = like.id;
  return $.ajax({
      method: 'DELETE',
      url: `/api/likes/${id}`,
  });
};


export const fetchAllLikes = () => {
  return $.ajax({
      method: 'GET',
      url: '/api/likes/'
  });
};
