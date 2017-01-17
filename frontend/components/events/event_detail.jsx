import React from 'react';
import {withRouter} from 'react-router';

class EventDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestEvent(parseInt(this.props.params.eventId));
  }

  componentWillReceiveProps() {
    this.props.requestEvent(parseInt(this.props.params.eventId));
  }

  render () {
    let time, date;
    if (this.props.event.time){
      const el = this.props.event.time.split('T')[1].split(':');
      time = el[0] + ':' + el[1];
      date = this.props.event.date.replace('-', '/').replace('-', '/');
    }
    return(
      <div className='event-detail-container'>
        <div className='event-detail-inner-container'>
          <div key={1} className='event-detail-event-name'>{this.props.event.name}</div>
        </div>
        <div key={3} className='event-detail-event-datetime'>Date : {date}</div>
        <div key={4} className='event-detail-event-datetime'>Time : {time}</div>
        <div key={5} className='event-detail-event-datetime'>{this.props.event.description}</div>
      </div>
    );
  }
}

export default withRouter(EventDetail);
