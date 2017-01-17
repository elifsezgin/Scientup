import {connect} from 'react-redux';
import EventList from './event_list';
import {requestAllEvents} from '../../actions/event_actions';
import {selectAllEvents} from '../../reducers/selectors';

const mapStateToProps = state => ({
  events: selectAllEvents(state)
});
const mapDispatchToProps = dispatch => ({
  requestAllEvents: () => dispatch(requestAllEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
