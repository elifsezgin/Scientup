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
  }

  componentDidMount() {
    // TODO: add clear errors
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
        <input className="auth-form-button"
               type="submit"
               onClick={this.handleSubmit}
               value="Log in"/>
               <br/>
           <p className='login-link'>Not registered yet?
             <br/>
             <Link to='/welcome/signup'>Sign up</Link></p>
        <br/><br/>
    </form>);
  }
}
// <li><a href="#">Forgot your password?</a></li>

export default withRouter(loginForm);
