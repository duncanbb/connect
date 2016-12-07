import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting_container';

const sessionLinks = () => (
  <nav name ="top-header group">
    <Link to="/" className="logo">Connect</Link>
    <ul className="header-links group">
      <li>
        <Link to="/write_a_story">Write a story</Link>
      </li>
      <li>
        <Link to="/signin">Sign in / Sign up</Link>
      </li>
      <li>
        <Link to="/search">Search</Link>
      </li>
    </ul>
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
