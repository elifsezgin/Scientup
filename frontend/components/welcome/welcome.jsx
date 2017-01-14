import React from 'react';
import {Link} from 'react-router';
import HeaderContainer from '../header/header_container';
import ReactPlayer from 'react-player';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <HeaderContainer />
        
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
