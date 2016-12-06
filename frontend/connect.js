import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import React from 'react';
import { signInUser } from './actions/session_actions';

window.login = signInUser;

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
  ReactDOM.render(<Root store={ store }/>, root);
});
