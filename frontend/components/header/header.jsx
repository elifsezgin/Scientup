import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props)
    const currentUser=this.props.currentUser
  }

  render() {

  const links = {
    if (currentUser) {
      <Link to='/home/logout'>Log out</Link>
    } else {
      <Link to='/welcome/demo'>Demo</Link>
      <Link to='/welcome/login'>Log in</Link>
      <Link to='/welcome/signup'>Sign up</Link>
    }
  }
  return (
    <header>
      
    </header>
  )

  }
}

export default Header;
