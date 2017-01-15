import React from 'react';
import {Link} from 'react-router';
import HeaderContainer from '../header/header_container';
import ReactPlayer from 'react-player';
import MainHeader from '../header/main_header';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lon: null
    };
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
    this.setState({
      lat: position.coords.latitude,
      lon: position.coords.longitude
    });
    this.props.getLocation(this.state.lat, this.state.lon);

    console.log( "Latitude: " + position.coords.latitude +
    "Longitude: " + position.coords.longitude);
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
