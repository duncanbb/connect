import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import React from 'react';
import { signInUser } from './actions/session_actions';
import Modal from 'react-modal';
import * as APIUtil from './util/story_api_util';

window.login = signInUser;
window.fetchSingleStory = APIUtil.fetchSingleStory;
window.fetchAllStories = APIUtil.fetchAllStories;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
   store = configureStore();
 }
  window.store = store;
  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={ store }/>, root);
});
