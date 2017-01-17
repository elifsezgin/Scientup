import React from 'react';
import {Link, withRouter} from 'react-router';
import EventListItem from './event_list_item';

class EventList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestAllEvents();
  }


  render () {
    window.props = this.props;
    const events = this.props.events.map(event => (
      <EventListItem key={event.id} event={event} group={event.group} />
      )
    );
    return (
      <div className="event-list">
        {events}
        {this.props.children}
      </div>
    );
  }
}

export default EventList;
