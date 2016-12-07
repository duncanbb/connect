import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header_container';

const sessionLinks = (currentUser, logout) => (
  <header>
    <nav name ="top-header group">
      <Link to="/" className="logo">Connect</Link>
      <ul className="header-links group">
        <li>
          <Link to="/write_a_story">Write a story</Link>
        </li>
          { signInOrAccountDetails(currentUser, logout) }
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </nav>
  </header>
);

const signInOrAccountDetails = (currentUser, logout) => {
  let link
  if (currentUser) {
      link = <Link to="/" onClick={ logout }>Sign out</Link>
  } else {
    link = <Link to="/signin">Sign In / Sign Up</Link>
  }
  return (
    <li>
      { link }
    </li>
  )
};

const Header = ({ currentUser, logout }) => (
  sessionLinks(currentUser, logout)
);

export default Header;
