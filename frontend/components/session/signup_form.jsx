import React from 'react';
import merge from 'lodash/merge';
import {Link, withRouter} from 'react-router';

class signupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      show_email: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  componentDidMount () {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup({ user }).then(()=> {
      this.props.closeModal();
      this.redirect('/');
    });
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
  if (property === 'show_email') {
    return e => this.setState({ [property]: !this.state[property] });
  } else {    
    return e => this.setState({ [property]: e.target.value });
  }
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
    return null;
  }

  render() {

    return(<form className='auth-form'>
      <h4> Signup Information </h4>
      {this.renderErrors()}
        <input className="username"
               type="text"
               value={this.state.username}
               placeholder="Enter Username"
               onChange={this.update('username')}/>
        <input className="email"
               type="text"
               value={this.state.email}
               placeholder="Enter Email"
               onChange={this.update('email')}/>
        <input className="pw"
               type="password"
               value={this.state.password}
               placeholder="Enter Password"
               onChange={this.update('password')}/>
             <div className="show-email-question-flex"><div className="show-email-question">Do you want your email to be shown to others?</div>
        <input className="auth-form-checkbox"
               type="checkbox"
               value={this.state.show_email}
               onChange={this.update('show_email')}/></div>
        <div className='demo-login-signup-container'>
        <input className="auth-form-button"
               type="submit"
               value='Sign up'
               onClick={this.handleSubmit}/>
           <p key={3} onClick={this.handleDemo}><button className='header-buttons'>Demo</button></p>
       </div>
        <br/>
        <br/>
        <br/>
        <br/>
    </form>);
  }
}
// <li><a href="#">Forgot your password?</a></li>

export default withRouter(signupForm);
