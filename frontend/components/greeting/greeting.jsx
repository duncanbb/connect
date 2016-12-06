import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting_container';

const sessionLinks = () => (
  <nav name ="signin-signup">
    <Link to="/signin">Sign in</Link>
    <Link to="/signup">Sign up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <div>
    <h2>Hi, { currentUser.username }</h2>
    <button onClick={logout}>Sign out</button>
  </div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
