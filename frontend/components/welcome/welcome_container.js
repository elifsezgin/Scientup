import {connect} from 'react-redux';
import Welcome from './welcome';
import {login} from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  null,
  mapDispatchToProps
)(Welcome);
