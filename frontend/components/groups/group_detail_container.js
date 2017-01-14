import {connect} from 'react-redux';
import GroupDetail from './group_detail';
import {requestGroup} from '../../actions/group_actions';


const mapStateToProps = state => ({
  group: state.groupDetail
});
const mapDispatchToProps = dispatch => ({
  requestGroup: (id) => dispatch(requestGroup(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetail);
