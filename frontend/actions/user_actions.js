export const RECEIVE_USER_PAGE = 'RECEIVE_USER_PAGE';

export function fetchUserStories(id) {
  return (dispatch) => {
    return APIUtil.fetchUserStories(id)
      .then(user => { dispatch(receiveUserPage(user));
    });
  };
}

export const receiveUserPage = user => ({
  type: RECEIVE_USER_PAGE,
  user
});
