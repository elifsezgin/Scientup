import {connect} from 'react-redux';
import Home from './home';
import {logout} from '../../actions/session_actions';
import {receiveGroup} from '../../actions/group_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
  groupDetail: state.groupDetail
});

const mapDispatchToProps = dispatch => ({
  receiveGroup: (id) => dispatch(receiveGroup(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
