import {connect} from 'react-redux';
import loginForm from './login_form';
import {login} from '../../actions/session_actions';

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(loginForm);
