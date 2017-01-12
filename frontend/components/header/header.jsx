import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout (e) {
    this.props.logout();
  }


  render() {
    const loginLink = (<Link to='/welcome/login'>Log in</Link>);
    const signupLink = (<Link to='/welcome/signup'>Sign up</Link>);
    const demoLink = (<Link to='/welcome/demo'>Demo</Link>);
    const logoutLink = (<Link to='/welcome' onClick={this.handleLogout}>Log out</Link>);

    const links = ( (this.props.currentUser) ? [logoutLink] : [demoLink, loginLink, signupLink] );

  return(
    <header className='header-container'>
      <img className='logo' src={window.assets.logo}></img>
      <ul className='header-list'>
      {links.map((link, idx) => (
        <button key={idx} className='header-buttons'>{link}</button>
      ))}
      </ul>
    </header>
  );

  }
}

export default Header;
