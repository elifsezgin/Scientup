import React from 'react';
import {Link, withRouter} from 'react-router';
import Modal from 'react-modal';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
			modalType: 'login'
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.welcomeMessage = this.welcomeMessage.bind(this);
    this.redirect = this.redirect.bind(this);
    this.createGroup = this.createGroup.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

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

  createGroup () {
    if (this.props.currentUser) {
      return (
        <Link to='groups/new' >
        <button className='create-button'>
            <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
      </Link>
      );
    }
  }

  openModal(modalType) {
    this.setState({
      modalOpen: true,
      modalType
    });
  }

  closeModal() {
    this.setState({modalOpen: false});
  }


  render() {

    const loginLink = (<button
      className='header-buttons'
      onClick={this.openModal.bind(this, 'login')}>Log in</button>);

    const signupLink = (<button
      className='header-buttons'
      onClick={this.openModal.bind(this, 'signup')}>Sign up</button>);

    // const loginLink = (<Link to='/welcome/login'><button className='header-buttons'>Log in</button></Link>);
    // const signupLink = (<Link to='/welcome/signup'><button className='header-buttons'>Sign up</button></Link>);
    const demoLink = (<p onClick={this.handleDemo}><button className='header-buttons'>Demo</button></p>);
    const logoutLink = (<p onClick={this.handleLogout}><button className='header-buttons'>Log out</button></p>);


    const links = ( (this.props.currentUser) ? [logoutLink] : [demoLink, loginLink, signupLink] );

    const loginOrSignup = (
       (this.state.modalType === 'login') ? (<LoginFormContainer />) : (<SignupFormContainer />)
    );

    const ModalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'transparent',
  },
  content : {
    padding: '0',
    opacity: '0.9',
    boxShadow: "20px 20px 20px",
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : 'auto',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '20px',
    backgroundColor : '#EDE5E2'
  }
};

  return(
    <div>
      <header className='header-container'>
        <Link to="/home"><img className='logo' src={window.assets.logo}></img></Link>
        {this.welcomeMessage()}
        <ul className='header-list'>
          <li>{this.createGroup()}</li>
          {links}
          <Modal
            contentLabel='Modal'
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={ModalStyle}>
            {loginOrSignup}
            {(this.state.modalType === 'login') ? (
              <p className='login-link'>Not registered yet?
                  <strong
                    onClick={this.openModal.bind(this, 'signup')}> Sign up</strong></p>
            ) : (

              <p className='login-link'>
                Already a member?
                  <strong
                    onClick={this.openModal.bind(this, 'login')}> Log in</strong></p>
            )}
         <br/><br/>
          </Modal>
        </ul>
      </header>
    </div>
  );

  }
}

export default withRouter(Header);
