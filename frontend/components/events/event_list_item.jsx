import React from 'react';

class EventListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const el = this.props.event.time.split('T')[1].split(':');
    const time = el[0] + ':' + el[1];
    return(
      <div>
      <div className='event-list-item-date'>{this.props.event.date.replace('-', '/').replace('-', '/')}</div>
      <li className='event-list-item-container'>
        <div className='event-list-item-date-time'>
          <div className='event-list-item-time'>{time}</div>
        </div>
        <div className='event-list-item-group-event'>
          <div className='event-list-item-group'>{this.props.group.title.toUpperCase()}</div>
          <div className='event-list-item-event'>{this.props.event.name}</div>
          <div className='event-list-item-group'>{this.props.event.participants.length} people are going</div>
        </div>
      </li>
      </div>
    );
  }
}

export default EventListItem;

// split('T')[1].splice(0, 5)
