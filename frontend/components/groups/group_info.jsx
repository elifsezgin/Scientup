import React from 'react';
import {Link, withRouter} from 'react-router';
import EventListContainer from '../events/event_list_container';


class GroupInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const group = this.props.group;
    const events = (group.events ? (
      <ul>
        <div className='events-header'>Group activities:</div>
        <EventListContainer group={group} display='all'/>
      </ul>
    ) : null);
    return(
      <div>
        <div className='group-description'>{group.description}</div>
        {events}
      </div>
    );
  }
}
export default GroupInfo;
