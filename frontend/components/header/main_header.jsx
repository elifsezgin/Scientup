import React from 'react';
import {Link, withRouter} from 'react-router';

class MainHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    window.propsheader = this.props;
    const welcomeVideo = (
      <video className="welcome-video" autoPlay muted loop>
        <source src="http://res.cloudinary.com/datsbxfvs/video/upload/v1484242056/welcome_video_gpslvo.mp4" type="video/mp4" />
        Could not find video.
      </video>);

    const homeBackground = (
      <div className='home-background'>
        <h1>Find a ScientUp</h1>
      </div>
    );

    const background = (this.props.userLoggedIn ? homeBackground : welcomeVideo);

    return (
      <div>
      {background}
      </div>
    );
  }
}

export default withRouter(MainHeader);
