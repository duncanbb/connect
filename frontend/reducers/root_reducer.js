import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import StoryReducer from './story_reducer';
import storyDetailReducer from './story_detail_reducer';
import CommentReducer from './comment_reducer';
import likeReducer from './like_reducer';
import followReducer from './follow_reducer';
import userReducer from './user_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  stories: StoryReducer,
  storyDetail: storyDetailReducer,
  comments: CommentReducer,
  likes: likeReducer,
  follows: followReducer,
  user: userReducer,
});

export default RootReducer;
