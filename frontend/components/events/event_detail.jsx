import React from 'react';
import {withRouter} from 'react-router';
import MapContainer from '../maps/map_container';

class EventDetail extends React.Component {
  constructor(props) {
    super(props);
    this.addParticipant = this.addParticipant.bind(this);
    this.removeParticipant = this.removeParticipant.bind(this);
    this.joinLeaveEvent = this.joinLeaveEvent.bind(this);
  }

  componentDidMount () {
    this.props.requestEvent(parseInt(this.props.params.eventId));
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.eventId !== newProps.params.eventId) {
      this.props.requestEvent(parseInt(newProps.params.eventId));
    }
  }

  addParticipant () {
    this.props.addParticipant({event_id: this.props.event.id, user_id: this.props.currentUser.id});
  }

  removeParticipant () {
    this.props.deleteParticipant(this.props.event.id);
  }

  joinLeaveEvent () {
    const currentUser = this.props.currentUser;
    let button;

    if (this.props.event.participants) {
      this.props.event.participants.forEach(participant => {
        // debugger;
        if (participant.username === currentUser.username) {
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

  render () {
    let time, date, participantsCount;
    if (this.props.event.time){
      const el = this.props.event.time.split('T')[1].split(':');
      time = el[0] + ':' + el[1];
      date = this.props.event.date.replace('-', '/').replace('-', '/');
      participantsCount = this.props.event.participants.length;
    }

    return(
      <div className='event-detail-container'>
        <div className='event-detail-inner-container'>
          <div key={1} className='event-detail-event-name'>{this.props.event.name}</div>
        </div>
        <div key={3} className='event-detail-event-datetime'>Date : {date}</div>
        <div key={4} className='event-detail-event-datetime'>Time : {time}</div>
        <div key={5} className='event-detail-participation'>
          <div>{participantsCount} people are going</div>
        {this.joinLeaveEvent()}
        </div>
        <div key={6} className='event-detail-event-datetime'>{this.props.event.description}</div>

        <MapContainer />
      </div>
    );
  }
}

export default withRouter(EventDetail);
