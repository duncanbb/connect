import React from 'react';
import HeaderContainer from './header/header_container';
import StoriesIndexContainer from './stories/stories_index_container';

const App = ({ children }) => {
  return (
  <section className="react-root">
    <HeaderContainer />
    <StoriesIndexContainer />
    { children }
  </section>
  )
};

export default App;
