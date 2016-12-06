import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import React from 'react';
import { loginUser } from './actions/session_actions';

window.login = loginUser;

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
