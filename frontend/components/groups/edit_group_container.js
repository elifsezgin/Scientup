import {connect} from 'react-redux';
import EditGroup from './edit_group';
import {updateGroup, addImage, requestGroup} from '../../actions/group_actions';
import {clearErrors} from '../../actions/session_actions';

const mapStateToProps = state => ({
  cityName: state.location.cityName,
  errors: state.errors,
  group: state.groupDetail
});
const mapDispatchToProps = dispatch => ({
  updateGroup: (group) => dispatch(updateGroup(group)),
  clearErrors: () => dispatch(clearErrors()),
  addImage: image => dispatch(addImage(image)),
  requestGroup: (id) => dispatch(requestGroup(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditGroup);
