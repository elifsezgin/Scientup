import React from 'react';

class EventListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const el = this.props.event.time.split('T')[1].split(':');
    const time = el[0] + ':' + el[1];
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
    const parsedDate = this.props.event.date.split('-');
    const date = parsedDate[2] + ' ' +  months[parsedDate[1]] + ' ' + parsedDate[0];
    return(
      <div>
      <div className='event-list-item-date'>{date}</div>
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
