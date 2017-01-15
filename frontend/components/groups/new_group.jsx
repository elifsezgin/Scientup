import React from 'react';
import {withRouter} from 'react-router';
import HeaderContainer from '../header/header_container';

class NewGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      image_url: '',
      city_name: '',
      lat: null,
      lon: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount () {
    this.props.clearErrors();
  }


  handleSubmit(e) {
    e.preventDefault();
    const group = Object.assign({}, this.state);
    this.props.createGroup({ group }).then((data)=>
      this.props.router.push(`groups/${data.id}`));
  }

  update(property) {
   return e => this.setState({ [property]: e.target.value });
  }

  renderErrors() {
    let errors = null;
    if (this.props.errors) {
      errors = (<ul className='auth-errors'>
        {this.props.errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>);
    }
    return(errors);
  }


  render () {
    window.props = this.props;
    const placeholderCityName = (this.props.cityName) ? (this.props.cityName) : 'San Francisco';
    return (
      <div>
        <HeaderContainer />
          <form className='group-creation-form'>
            {this.renderErrors()}

            <h6>FIRST STEP</h6>

            <label className='group-creation-labels'>
              <i className="fa fa-globe icons" aria-hidden="true"></i>
              What is your new Scientup Group's hometown?</label>
              <input className="group-creation-input"
                     type="text"
                     value={this.state.city_name}
                     placeholder={placeholderCityName}
                     onChange={this.update('city_name')}/>

                   <h6>SECOND STEP</h6>
            <label className='group-creation-labels'>
              <i className="fa fa-flask icons" aria-hidden="true"></i>
              What will be the name of your Scientup Group?</label>
              <input className="group-creation-input"
                     type="text"
                     value={this.state.title}
                     placeholder={`Geneticists in ${placeholderCityName}`}
                     onChange={this.update('title')}/>
                   <h6>THIRD STEP</h6>
            <label className='group-creation-labels'>
              <i className="fa fa-pencil-square-o icons" aria-hidden="true"></i>
              Describe who should join, and what your Scientup Group will do.</label>
            <textarea className="group-creation-input"
                     value={this.state.description}
                     placeholder="Your description here"
                     onChange={this.update('description')}></textarea>

            <input className="group-creation-button"
                   type="submit"
                   onClick={this.handleSubmit}
                   value="Create Scientup"/>
                   <br/>

            <br/><br/>
        </form>
      </div>
    );
  }
}

export default withRouter(NewGroup);
