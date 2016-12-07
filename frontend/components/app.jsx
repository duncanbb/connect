import React from 'react';
import HeaderContainer from './header/header_container';

const App = ({ children }) => {
  return (
  <section className="react-root">
    <HeaderContainer />
    { children }
  </section>
  )
};

export default App;
