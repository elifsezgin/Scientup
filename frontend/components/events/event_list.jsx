import React from 'react';
import {Link, withRouter} from 'react-router';
import EventListItem from './event_list_item';
import MapContainer from '../maps/map_container';

class EventList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestAllEvents();
  }

  componentWillReceiveProps(newProps)  {
    if (this.props.searchInput !== newProps.searchInput) {
      this.props.requestAllEvents({searchInput: newProps.searchInput});
    }
  }


  render () {
    window.props = this.props;
    let events = this.props.events;
    if (this.props.group) {
      events = this.props.events.filter((event)=> {
        return (event.group.id === this.props.group.id);
      }
    );
    }
    const allEvents = events.map(event => {
      return (<Link key={event.id}
        className='link'
        to={`groups/${event.group.id}/events/${event.id}`}>
      <EventListItem event={event} group={event.group} />

      </Link>);
      }
    );
    return (
      <div className="event-list">
        {allEvents}
        {this.props.children}
      </div>
    );
  }
}

export default EventList;
