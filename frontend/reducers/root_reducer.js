import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import StoryReducer from './story_reducer';
import storyDetailReducer from './story_detail_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  stories: StoryReducer,
  storyDetail: storyDetailReducer,
});

export default RootReducer;
