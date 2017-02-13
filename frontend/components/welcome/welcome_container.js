import {connect} from 'react-redux';
import Welcome from './welcome';
import {login} from '../../actions/session_actions';
import {getLocation} from '../../actions/group_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  getLocation: (lat, lon) => dispatch(getLocation(lat, lon)),
  login: (user) => dispatch(login(user))
});

export default connect(
  null,
  mapDispatchToProps
)(Welcome);
