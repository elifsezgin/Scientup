import {connect} from 'react-redux';
import NewGroup from './new_group';
import {createGroup} from '../../actions/group_actions';
import {clearErrors} from '../../actions/session_actions';

const mapStateToProps = state => ({
  cityName: state.location.cityName,
  errors: state.errors
});
const mapDispatchToProps = dispatch => ({
  createGroup: (group) => dispatch(createGroup(group)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewGroup);
