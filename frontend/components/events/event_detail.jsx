import React from 'react';
import {withRouter} from 'react-router';
import MapContainer from '../maps/map_container';

class EventDetail extends React.Component {
  constructor(props) {
    super(props);
    this.addParticipant = this.addParticipant.bind(this);
    this.removeParticipant = this.removeParticipant.bind(this);
    this.joinLeaveEvent = this.joinLeaveEvent.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount () {
    this.props.requestEvent(parseInt(this.props.params.eventId));
  }

  componentWillReceiveProps(newProps) {
    if (this.props.errors !== newProps.errors) {
      this.props.requestEvent(parseInt(newProps.params.eventId));
    }
  }

  addParticipant () {
    this.props.addParticipant({event_id: this.props.event.id, user_id: this.props.currentUser.id}).then(()=>
  this.props.clearErrors());
  }

  removeParticipant () {
    this.props.deleteParticipant(this.props.event.id).then(()=>
  this.props.clearErrors());
  }

  joinLeaveEvent () {
    const currentUser = this.props.currentUser;
    let button;

    if (this.props.event.participants) {
      this.props.event.participants.forEach(participant => {
        if (currentUser && participant.username === currentUser.username) {
          button = (<button
              className='event-join-buttons'
              onClick={this.removeParticipant}>Leave Event</button>);
      }});
    }
    if (button) {
      return button;
    } else {
      return (
          <button
            className='event-join-buttons'
            onClick={this.addParticipant}>Join Event</button>
        );
    }
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
    let time, date, participantsCount, location;
    if (this.props.event.time){
      const el = this.props.event.time.split('T')[1].split(':');
      time = el[0] + ':' + el[1];
      date = this.props.event.date.replace('-', '/').replace('-', '/');
      participantsCount = this.props.event.participants.length;
      location = this.props.event.address;
    }

    return(
      <div className='event-detail-container'>
        <div className='event-detail-inner-container'>
          <div key={1} className='event-detail-event-name'>{this.props.event.name}</div>
        </div>
        <div key={3} className='event-detail-event-datetime'>Date : {date}</div>
        <div key={4} className='event-detail-event-datetime'>Time : {time}</div>
        <div key={5} className='event-detail-event-datetime'>Location : {location}</div>

        <div key={6} className='event-detail-participation'>
          <div>{participantsCount} people are going</div>
        {this.joinLeaveEvent()}
        </div>
        <div key={7} className='event-detail-event-datetime'>{this.props.event.description}</div>

        <MapContainer />
      </div>
    );
  }
}

export default withRouter(EventDetail);
