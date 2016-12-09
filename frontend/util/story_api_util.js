
export const createStory = (story) => {
  return $.ajax({
      method: 'POST',
      url: '/api/stories/',
      data: { story },
  });
};

export const fetchSingleStory = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/stories/${id}`
  });
};

export const fetchAllStories = () => {
  return $.ajax({
      method: 'GET',
      url: '/api/stories/'
  });
};

export const deleteStory = (story) => {
  return $.ajax({
      method: 'DELETE',
      url: '/api/stories/',
  });
};
