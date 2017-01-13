import {connect} from 'react-redux';
import GroupList from './group_list';
import {requestAllGroups} from '../../actions/group_actions';
import {selectAllGroups} from '../../reducers/selectors';

const mapStateToProps = state => ({
  groups: selectAllGroups(state)
});
const mapDispatchToProps = dispatch => ({
  requestAllGroups: () => dispatch(requestAllGroups())
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
