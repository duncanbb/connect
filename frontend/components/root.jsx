import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import WriteAStoryContainer from './stories/write_a_story_container';
import StoryDetailContainer from './stories/story_detail_container';
import { fetchSingleStory } from './../actions/story_actions';
import StoryIndexContainer from './stories/stories_index_container';

const _redirectIfLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (currentUser) {
    replace('/#/stories');
  }
};


const Root = ({ store }) => {
  function ensureStory(nextState, replace, asyncDone) {
    store.dispatch(fetchSingleStory(nextState.params.storyId)).then(asyncDone);
  }
  window.store = store;

  return (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ StoryIndexContainer }/>
        <Route path="write_a_story" component={ WriteAStoryContainer }/>
        <Route path="stories/:storyId" component={ StoryDetailContainer } onEnter={ ensureStory }/>
      </Route>
    </Router>
  </Provider>
)

};

export default Root;
