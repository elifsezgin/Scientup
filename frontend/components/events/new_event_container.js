import {connect} from 'react-redux';
import NewEvent from './new_event';
import {createEvent} from '../../actions/event_actions';
import {clearErrors} from '../../actions/session_actions';

const mapStateToProps = state => ({
  group_id: state.groupDetail.id,
  errors: state.errors
});
const mapDispatchToProps = dispatch => ({
  createEvent: (event) => dispatch(createEvent(event)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewEvent);
