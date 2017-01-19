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
			modalType: 'login',
      displayDropdown: 'invisible'
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.welcomeMessage = this.welcomeMessage.bind(this);
    this.redirect = this.redirect.bind(this);
    this.createGroup = this.createGroup.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);

  }

  handleLogout (e) {
    this.props.logout().then(() =>
    this.redirect('/welcome'));
  }

  handleDemo (e) {
    this.props.login({user: {username: 'Guest', password: 'password'}}).then(() =>
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
        <Link className='link' to='groups/new' >
        <button className='header-buttons'>
            <div>Create Group </div>
            <i className="fa fa-plus plus-icon" aria-hidden="true"></i>

        </button>
      </Link>
      );
    }
  }

  redirecthome () {
    if (this.props.currentUser) {
      return (
        <Link className='link' to='/' >
        <button className='header-buttons'>

            <i className="fa fa-home" aria-hidden="true"></i>

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

  toggleDropdown() {
    if (this.state.displayDropdown === "invisible"){
      this.setState({ displayDropdown: 'visible' });
    } else {
      this.setState({ displayDropdown: 'invisible' });
    }
  }


  render() {
    const dropdownClass = 'dropdown ' + this.state.displayDropdown;
    const loginLink = (<button
      key={1}
      className='header-buttons'
      onClick={this.openModal.bind(this, 'login')}>Log in</button>);

    const signupLink = (<button
      key={2}
      className='header-buttons'
      onClick={this.openModal.bind(this, 'signup')}>Sign up</button>);
    const dropdown = (<p key={4} onClick={this.toggleDropdown}><button className='header-buttons'>
  <i className="fa fa-user" aria-hidden="true"></i>
    <ul className={dropdownClass}>
                    <Link to={`/profile`}
                      className='link'><li>Profile</li></Link>
                    <li onClick={this.handleLogout}>Log Out</li>
                  </ul>
  </button></p>);

    const links = ( (this.props.currentUser) ? [dropdown] : [loginLink, signupLink] );

    const loginOrSignup = (
       (this.state.modalType === 'login') ? (<LoginFormContainer closeModal={this.closeModal} />) : (<SignupFormContainer closeModal={this.closeModal}  />)
    );

    const ModalStyle = {
  overlay : {
    position          : 'fixed',
    top               : '0px',
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0,0,0,0.6)',
    transition: 'all 0.5s'
  },
  content : {
    padding: '0',
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
        <Link className='link' to="/home"><img className='logo' src={window.assets.logo}></img></Link>
        {this.welcomeMessage()}
        <ul className='header-list'>
          <li>{this.redirecthome()}</li>
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
