import {connect} from 'react-redux';
import EventDetail from './event_detail';
import {createEvent, requestEvent, addParticipant, deleteParticipant} from '../../actions/event_actions';
import {clearErrors} from '../../actions/session_actions';

const mapStateToProps = state => ({
  event: state.eventDetail,
  currentUser: state.session.currentUser
});
const mapDispatchToProps = dispatch => ({
  requestEvent: (id) => dispatch(requestEvent(id)),
  clearErrors: () => dispatch(clearErrors()),
  addParticipant: (data) => dispatch(addParticipant(data)),
  deleteParticipant: (event_id) => dispatch(deleteParticipant(event_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
