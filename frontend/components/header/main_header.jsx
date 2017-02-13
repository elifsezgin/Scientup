import React from 'react';
import {Link, withRouter} from 'react-router';

class MainHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    window.propsheader = this.props;
    const welcomeVideo = (
      <div>
      <video className="welcome-video" autoPlay muted loop>
        <source src="https://res.cloudinary.com/datsbxfvs/video/upload/v1484242056/welcome_video_gpslvo.mp4" type="video/mp4" />
        Could not find video.
      </video>
      <div  className="welcome">
        <h1>Find a ScientUp</h1>
        <h3>Discover local Science events you love.</h3>
        <h3>Join the science community you belong.</h3>
      </div>
      </div>);

    const homeBackground = (
      <div className='home-background'>
        <h1>Find a ScientUp</h1>
        <h3>Discover local Science events you love.</h3>
        <h3>Join the science community you belong.</h3>
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
