import React from 'react';
import {withRouter} from 'react-router';

class NewEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      date: '',
      time: '',
      group_id: ''
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
    const event = Object.assign({}, this.state);
    event.group_id = this.props.group_id;
    this.props.createEvent({ event }).then((data)=>{
      return (this.props.router.push(`groups/${event.group_id}/events/${data.event.id}`));
      }
    );
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
        <form className='event-creation-form'>
          {this.renderErrors()}

          <h6>FIRST STEP</h6>

          <label className='event-creation-labels'>
            <i className="fa fa-question icons" aria-hidden="true"></i>
            What is your event called?</label>
          <input className="event-creation-input"
                   type="text"
                   value={this.state.name}
                   placeholder='Your event name here.'
                   onChange={this.update('name')}/>

                 <h6>SECOND STEP</h6>
          <label className='event-creation-labels'>
            <i className="fa fa-calendar-check-o icons" aria-hidden="true"></i>
            When is your event?</label>
          <input className="event-creation-input"
                   type="date"
                   value={this.state.date}
                   onChange={this.update('date')}/>
                 <input className="event-creation-input"
                   type="time"
                   value={this.state.time}
                   onChange={this.update('time')}/>
                 <h6>THIRD STEP</h6>
          <label className='event-creation-labels'>
            <i className="fa fa-pencil-square-o icons" aria-hidden="true"></i>
            What is your event about?</label>
          <textarea className="event-creation-input"
                   value={this.state.description}
                   placeholder="Your description here"
                   onChange={this.update('description')}></textarea>

                 <input className="event-creation-button"
                 type="submit"
                 onClick={this.handleSubmit}
                 value="Create Your Event"/>
                 <br/>

          <br/><br/>
        </form>
      </div>
    );
  }
}

export default withRouter(NewEvent);
