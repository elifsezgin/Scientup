import React from 'react';
import {Link, withRouter} from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.welcomeMessage = this.welcomeMessage.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  handleLogout (e) {
    this.props.logout().then(() =>
    this.redirect('/welcome'));
  }

  handleDemo (e) {
    this.props.login({user: {username: 'Science Lover', password: 'password'}}).then(() =>
    this.redirect('/home'));
  }

  redirect (route) {
    this.props.router.push(route);
  }

  welcomeMessage () {
    if (this.props.currentUser) {
      return(
        <p className='welcome-message'>Welcome {this.props.currentUser.username}!</p>
      );
    }
  }


  render() {
    const loginLink = (<Link to='/welcome/login'>Log in</Link>);
    const signupLink = (<Link to='/welcome/signup'>Sign up</Link>);
    const demoLink = (<p onClick={this.handleDemo}>Demo</p>);
    const logoutLink = (<p onClick={this.handleLogout}>Log out</p>);

    const links = ( (this.props.currentUser) ? [logoutLink] : [demoLink, loginLink, signupLink] );

  return(
    <div>
      <header className='header-container'>
        <img className='logo' src={window.assets.logo}></img>
        {this.welcomeMessage()}
        <ul className='header-list'>
        {links.map((link, idx) => (
          <button key={idx} className='header-buttons'>{link}</button>
        ))}
        </ul>
      </header>
    </div>
  );

  }
}

export default withRouter(Header);
