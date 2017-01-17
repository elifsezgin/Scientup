import {connect} from 'react-redux';
import Search from './search';

const mapStateToProps = state => ({
  city: state.location.cityName
});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
