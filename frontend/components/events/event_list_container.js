import {connect} from 'react-redux';
import EventList from './event_list';
import {requestAllEvents} from '../../actions/event_actions';
import {selectAllEvents} from '../../reducers/selectors';

const mapStateToProps = state => ({
  events: selectAllEvents(state),
  searchInput: state.search.searchInput,
  searchType: state.search.searchType
});
const mapDispatchToProps = dispatch => ({
  requestAllEvents: (data) => dispatch(requestAllEvents(data))

});

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
