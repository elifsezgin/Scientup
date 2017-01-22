import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <footer className='footer-container'>
          <a href='https://github.com/elifsezgin/Scientup'><i className="fa fa-github github-icon" aria-hidden="true"></i></a>
        </footer>
      </div>
    );
  }
}

export default Footer;
