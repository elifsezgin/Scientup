import React from 'react';
import {Link} from 'react-router';
import ReactPlayer from 'react-player';
import MainHeader from '../header/main_header';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.getLocation = this.getLocation.bind(this);
    this.showPosition = this.showPosition.bind(this);
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
      if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
       return(<p>Geolocation is not supported by this browser.</p>);
      }
  }

  showPosition(position)  {
    this.props.getLocation(position.coords.latitude, position.coords.longitude);
  }

  render() {
    return(
      <div>
        <MainHeader userLoggedIn={Boolean(this.props.currentUser)} />

        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
