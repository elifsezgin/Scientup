import React from 'react';
import {Link, withRouter} from 'react-router';

class loginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login({ user }).then(()=> {
      this.props.closeModal();
      this.props.router.push('/');
    });
  }

  componentDidMount () {
    this.props.clearErrors();
  }

  redirect (route) {
    this.props.router.push(route);
  }

  handleDemo (e) {
    this.props.login({user: {username: 'Guest', password: 'password'}}).then(() => {
      this.props.closeModal();
    this.redirect('/home');
  });
  }

  update(property) {
   return e => this.setState({ [property]: e.target.value });
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul className='auth-errors'>
          {this.props.errors.map((error, idx) => (
          <li key={idx}>{error}</li>
          ))}
        </ul>
      );
    }
  }

  render() {

    return(
      <form className='auth-form'>
        <h4> Login Information </h4>
        {this.renderErrors()}
        <input className="email"
               type="text"
               value={this.state.username}
               placeholder="Enter Username"
               onChange={this.update('username')}/>
        <input className="pw"
               type="password"
               value={this.state.password}
               placeholder="Enter Password"
               onChange={this.update('password')}/>
         <div className='demo-login-signup-container'>
        <input className="auth-form-button"
               type="submit"
               onClick={this.handleSubmit}
               value="Log in"/>
         <p key={3} onClick={this.handleDemo}><button className='header-buttons'>Demo</button></p>
         </div>
         <br/>
    </form>);
  }
}

export default withRouter(loginForm);
