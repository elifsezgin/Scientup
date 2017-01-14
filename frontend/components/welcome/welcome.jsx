import React from 'react';
import {Link} from 'react-router';
import HeaderContainer from '../header/header_container';
import ReactPlayer from 'react-player';
import MainHeader from '../header/main_header';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <HeaderContainer />
        <MainHeader userLoggedIn={Boolean(this.props.currentUser)} />

        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
