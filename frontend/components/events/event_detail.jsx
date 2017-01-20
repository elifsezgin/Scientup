import React from 'react';
import {Link, withRouter} from 'react-router';
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
    this.props.clearErrors();
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
    const event = this.props.event;
    if (!event) {
      return (
        <div></div>
      );
    }
    let time, date, participantsCount, location;
    if (event.time){
      const el = event.time.split('T')[1].split(':');
      time = el[0] + ':' + el[1];
      const months = {
        '01': 'January',
        '02': 'February',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December'
      };
      const parsedDate = event.date.split('-');
      date = parsedDate[2] + ' ' +  months[parsedDate[1]] + ' ' + parsedDate[0];
      participantsCount = event.participants.length;
      location = event.address;
    }

    let authRequiredActions = null;
    // if (event.host && this.props.currentUser && event.host.username === this.props.currentUser.username) {
    //   let editEvent = (
    //     <Link to={`groups/${group.id}/events/edit`} className='event-join-buttons link' onClick={this.editEvent}>Edit Event</Link>
    //   );
    //   let deleteEvent = (
    //     <div className='event-join-buttons link' onClick={this.deleteEvent}>Edit Event</div>
    //   );
    //   authRequiredActions = (
    //     <div>
    //       {editEvent}
    //       {deleteEvent}
    //     </div>
    //   );
    //
    // }



    return(
      <div className='event-detail-container'>
        <div className='event-detail-inner-container'>
          <div key={1} className='event-detail-event-name'>{event.name}</div>
        </div>
        <div key={3} className='event-detail-event-datetime'>Date : {date}</div>
        <div key={4} className='event-detail-event-datetime'>Time : {time}</div>
        <div key={5} className='event-detail-event-datetime'>Location : {location}</div>

        <div key={6} className='event-detail-participation'>
          <div>{participantsCount} people are going</div>
          {authRequiredActions}
        {this.joinLeaveEvent()}
        </div>
        <div key={7} className='event-detail-event-datetime'>{event.description}</div>

        <MapContainer event={event}/>
      </div>
    );
  }
}

export default withRouter(EventDetail);
