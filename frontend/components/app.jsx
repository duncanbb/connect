import React from 'react';
import HeaderContainer from './header/header_container';
import StoriesIndexContainer from './stories/stories_index_container';
import StoryDetailContainer from './stories/story_detail_container';

const App = ({ children }) => {
  return (
  <section className="react-root">
    <HeaderContainer />
    { children }
  </section>
  )
};

export default App;
