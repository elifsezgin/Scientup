import {connect} from 'react-redux';
import Profile from './profile';
import {requestProfile} from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  profile: state.session.profile
});

const mapDispatchToProps = dispatch => ({
  requestProfile: (id) => dispatch(requestProfile(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
