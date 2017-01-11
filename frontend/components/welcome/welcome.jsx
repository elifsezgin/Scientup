import React from 'react';
import {Link} from 'react-router';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Link to="/welcome/login">Login</Link>
        <Link to="/welcome/signup">Sign up</Link>
        {this.props.children}

      </div>
    );
  }
}

export default Welcome;
