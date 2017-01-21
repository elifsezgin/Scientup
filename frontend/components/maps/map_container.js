import {connect} from 'react-redux';
import Map from './map';

const mapStateToProps = state => ({
  lat: state.location.lat,
  lng: state.location.lng,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
