
export const createStory = (story) => {
  return $.ajax({
      method: 'POST',
      url: '/api/stories/',
      processData: false,
      contentType: false,
      dataType: 'json',
      data: story,
  });
};

export const updateStory = (story) => {
  const id = story.id;
  return $.ajax({
    method: 'PATCH',
    url:`/api/stories/${id}`,
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
  const id = story.id;
  return $.ajax({
      method: 'DELETE',
      url: `/api/stories/${id}`,
  });
};
