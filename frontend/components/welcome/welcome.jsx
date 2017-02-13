import React from 'react';
import {Link} from 'react-router';
import ReactPlayer from 'react-player';
import MainHeader from '../header/main_header';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.getLocation = this.getLocation.bind(this);
    this.showPosition = this.showPosition.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.redirect = this.redirect.bind(this);
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

  handleDemo (e) {
    this.props.login({user: {username: 'Guest', password: 'password'}}).then(() =>
    this.redirect('/home'));
  }

  redirect (route) {
    this.props.router.push(route);
  }

  render() {
    return(
      <div>
        <MainHeader userLoggedIn={Boolean(this.props.currentUser)} />
        <div className='welcome-definitions-container'>
          <div className='flex-column'>
            <div className='welcome-definitions'>
              <div className='welcome-title'>Join your favorite science community</div><br/>
              <div className='welcome-definition'>Search for the Science topics you are interested. Join the community to see and join their events.</div>
            </div>
            <div className='images'>
              <img src='http://res.cloudinary.com/datsbxfvs/image/upload/v1486962799/group_1_qhgdug.png'></img>
            </div>
          </div>
          <div className='flex-column'>
          <div className='images'>
            <img src='http://res.cloudinary.com/datsbxfvs/image/upload/v1486963001/thinking-head_xwokyt.png'></img>
          </div>
          <div className='welcome-definitions'>
            <div className='welcome-title'>Create your science community</div><br/>
            <div className='welcome-definition'>Start your own science community to reach out like-minded people. Host events and spread your idea to the world.</div>
          </div>
          </div>
          <div className='flex-column'>
            <div className='welcome-definitions'>
              <div className='welcome-title'>Join & Create events and meet with people</div><br/>
              <div className='welcome-definition'>Search for the events nearby. Join the events or create your own event for your community.</div>
            </div>
            <div className='images'>
              <img src='http://res.cloudinary.com/datsbxfvs/image/upload/v1486963184/calendar_mrko0h.png'></img>
            </div>
          </div>
          <div className='flex-column'>
          <div className='images'>
            <img src='http://res.cloudinary.com/datsbxfvs/image/upload/v1486963347/login-square-arrow-button-outline_owouhu.png'></img>
          </div>
          <div className='welcome-definitions'>
            <div className='welcome-title'>Browse now</div><br/>
            <div className='welcome-definition'>Your first time? Sign in from <strong className="welcome-links"><a href="#signup">here</a></strong>. Already a member? Log in from <strong className="welcome-links"><a href="#login">here</a></strong>. Don't have time? Log in as a guest user from <strong className="welcome-links" onClick={this.handleDemo}>here</strong>.</div>
          </div>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
export default Welcome;
