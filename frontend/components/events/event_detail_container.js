import {connect} from 'react-redux';
import EventDetail from './event_detail';
import {createEvent, requestEvent} from '../../actions/event_actions';
import {clearErrors} from '../../actions/session_actions';

const mapStateToProps = state => ({
  event: state.eventDetail,
});
const mapDispatchToProps = dispatch => ({
  requestEvent: (event) => dispatch(requestEvent(event)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
