import {connect} from 'react-redux';
import Header from './header';
import {logout, login, signup} from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
