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
        <div>
        <video className="welcome-video" autoPlay muted loop>
          <source src="http://res.cloudinary.com/datsbxfvs/video/upload/v1484242056/welcome_video_gpslvo.mp4" type="video/mp4" />
          Could not find video.
        </video>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
