import {connect} from 'react-redux';
import GroupDetail from './group_detail';
import {requestGroup, deleteGroup, addMember, deleteMember} from '../../actions/group_actions';
import {selectUpcomingAndPastEvents} from '../../reducers/selectors';
import {clearErrors} from '../../actions/session_actions';

const mapStateToProps = state => ({
  group: state.groupDetail,
  currentUser: state.session.currentUser,
  event: state.eventDetail,
  events: selectUpcomingAndPastEvents(state),
  errors: state.errors
});
const mapDispatchToProps = dispatch => ({
  requestGroup: (id) => dispatch(requestGroup(id)),
  deleteGroup: (id) => dispatch(deleteGroup(id)),
  clearErrors: () => dispatch(clearErrors()),
  addMember: (info) => dispatch(addMember(info)),
  deleteMember: (id) => dispatch(deleteMember(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetail);
