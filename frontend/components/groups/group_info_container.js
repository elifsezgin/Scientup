import {connect} from 'react-redux';
import GroupInfo from './group_info';
import {requestGroup, deleteGroup, addMember, deleteMember} from '../../actions/group_actions';
import {selectUpcomingAndPastEvents} from '../../reducers/selectors';

const mapStateToProps = state => ({
  group: state.groupDetail,
  events: selectUpcomingAndPastEvents(state),
});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(GroupInfo);
