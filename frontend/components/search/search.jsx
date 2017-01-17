import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParams: ''
    };

    // this.switch = this.switch.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit() {
    
  }

  render() {
    return(
      <div>
        <form className='search-form'>
          <input
            className='search-input'
            type='text'
            placeholder='Search'
            onChange={this.update('searchParams')} />
          <i className="fa fa-search search-icon"
            aria-hidden="true"
            onClick={this.handleSubmit} ></i>

        </form>


      </div>

    );
  }
}
export default Search;
