export const createFollow = (follow) => {
  return $.ajax({
      method: 'POST',
      url: '/api/follows/',
      data: { follow },
  });
};


export const deleteFollow = (follow) => {
  const id = follow.id;
  return $.ajax({
      method: 'DELETE',
      url: `/api/follows/${id}`,
  });
};




export const fetchAllFollows = () => {
  return $.ajax({
      method: 'GET',
      url: '/api/follows/'
  });
};
