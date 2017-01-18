import {connect} from 'react-redux';
import Search from './search';
import {updateSearch} from '../../actions/search_actions';

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({
  updateSearch: (searchType, searchInput) => dispatch(updateSearch(searchType, searchInput))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
