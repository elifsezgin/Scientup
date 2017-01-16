import React from 'react';
import HomeContainer from './home/home_container';
import HeaderContainer from './header/header_container';

const App = ({ children }) => (
  <div>
    <HeaderContainer />
    {children}
  </div>
);

export default App;
