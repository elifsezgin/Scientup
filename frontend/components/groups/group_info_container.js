import {connect} from 'react-redux';
import GroupInfo from './group_info';
import {requestGroup, deleteGroup, addMember, deleteMember} from '../../actions/group_actions';

const mapStateToProps = state => ({
  group: state.groupDetail,
});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(GroupInfo);
