import React from 'react';
import {Link} from 'react-router';

class loginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    console.log(this.props);
    this.props.login({ user }).then(()=>
    this.props.router.push('/'));
  }

  update(property) {
   return e => this.setState({ [property]: e.target.value });
  }

  render() {

    return(
      <form className='login-form'>
        <h4> Login Information </h4>
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
        <input className="auth-form-button"
               type="submit"
               onClick={this.handleSubmit}
               value="Log in"/>
        <br/><br/>
    </form>);
  }
}
// <li><a href="#">Forgot your password?</a></li>

export default loginForm;
