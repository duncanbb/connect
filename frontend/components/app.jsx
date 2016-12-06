import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => {
  return (
  <header className="site-header">
    <GreetingContainer />
    { children }
  </header>
  )
};

export default App;
