import React from 'react';
import HomeContainer from './home/home_container';
import HeaderContainer from './header/header_container';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div>
    <HeaderContainer />
    {children}
    <Footer />
  </div>
);

export default App;
