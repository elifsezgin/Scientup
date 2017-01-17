import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParams: '',
      fetchAction: 'groups'
    };

    // this.switch = this.switch.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {

  }

  handleSubmit() {

  }

  fetchGroups() {
    this.setState({
      fetchAction: 'groups'
    });
  }

  fetchEvents() {
    this.setState({
      fetchAction: 'events'
    });
  }

  render() {
    return(

      <div>
        <form className='search-form'>
          <input
            className='search-input'
            type='text'
            value={this.state.searchParams}
            placeholder='Search'
            onChange={this.update('searchParams')}/>
          <i className="fa fa-search search-icon"
            aria-hidden="true"
            onClick={this.handleSubmit} ></i>

        </form>


      </div>

    );
  }
}
export default Search;
