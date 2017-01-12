import React from 'react';
import merge from 'lodash/merge';
import {Link} from 'react-router';

class signupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup({ user }).then(()=>
    this.props.router.push('/'));
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
        <input className="auth-form-button"
               type="submit"
               value='Sign up'
               onClick={this.handleSubmit}/>
             <br/>
         <p className='login-link'>Already a member?
           <br/>
           <Link to='/welcome/login'>Log in</Link></p>
      <br/><br/>
    </form>);
  }
}
// <li><a href="#">Forgot your password?</a></li>

export default signupForm;
