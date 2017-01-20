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
    let upcomingEvents = this.props.events[0];
    let mapDisplayUpcomingEvents = upcomingEvents;
    let pastEvents = this.props.events[1];
    if (this.props.group) {
      upcomingEvents = this.props.events[0].filter((event)=> {
        return (event.group.id === this.props.group.id);
      });
      pastEvents = this.props.events[1].filter((event)=> {
        return (event.group.id === this.props.group.id);
      });
    }
    upcomingEvents = (upcomingEvents.length === 0) ? (<p className='no-user'>No upcoming events</p>) : upcomingEvents.map(event => {
      return (<Link key={event.id}
        className='link'
        to={`groups/${event.group.id}/events/${event.id}`}>
      <EventListItem event={event} group={event.group} />

      </Link>);
      }
    );
    pastEvents = (pastEvents.length === 0) ? (<p className='no-user'>No past events</p>) : pastEvents.map(event => {
      return (<Link key={event.id}
        className='link'
        to={`groups/${event.group.id}/events/${event.id}`}>
      <EventListItem event={event} group={event.group} />

      </Link>);
      }
    );
    const eventList = () => {
      switch (this.props.display) {
        case 'all':
        return (
          <div className="flex">
            <div className='set-width'>
              <p className='group-description'>Upcoming events:</p>
              {upcomingEvents}

              <p className='group-description'>Past events:</p>
              {pastEvents}
            </div>
              <div className='map-on-events-index'>
                <MapContainer events={mapDisplayUpcomingEvents} />
              </div>
          </div>
        );
        case 'upcoming':
        return (
          <div className="event-list">
            <p className='group-description'>Upcoming events:</p>
            {upcomingEvents}

          </div>
        );
        case 'past':
        return (
          <div className="event-list">
            <p className='group-description'>Past events:</p>
            {pastEvents}
          </div>
        );
        default:
        return (
          <div className="event-list">
            <p className='group-description'>Upcoming events:</p>
            {upcomingEvents}
            <p className='group-description'>Past events:</p>
            {pastEvents}
          </div>
        );
      }
    };

    return (
      <div>
        {eventList()}
      {this.props.children}
      </div>
    );
  }
}

export default EventList;
