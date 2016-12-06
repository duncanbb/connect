import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting_container';

const sessionLinks = () => (
  <nav name ="login-signup">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Signup</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <div>
    <h2>Hi, { currentUser.username }</h2>
    <button onClick={logout}>Logout</button>
  </div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
