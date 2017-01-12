import React from 'react';
import {Link} from 'react-router';
import HeaderContainer from '../header/header_container';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <HeaderContainer />
        <div className="welcome-video">
        <video autoPlay muted >
          <source src="https://player.vimeo.com/video/146599806?title=0&byline=0&portrait=0" type="video/mp4" />
          Could not find video.
        </video>
        </div>
        {this.props.children}
      </div>
    );
  }
}

// <iframe src="https://player.vimeo.com/video/146599806?title=0&byline=0&portrait=0" width="640" height="268" frameBorder="0"  allowFullScreen></iframe>
export default Welcome;
