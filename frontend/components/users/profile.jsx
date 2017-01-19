import React from 'react';
import {Link} from 'react-router';
import GroupListItem from '../groups/group_list_item';
import EventListItem from '../events/event_list_item';

class Profile extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount () {
    this.props.requestProfile(this.props.currentUser.id);
  }

  // componentWillReceiveProps (newProps) {
  //   // if (typeof newProps.profile === 'undefined') {
  //   //   debugger;
  //   this.props.requestProfile(newProps.currentUser.id);
  //   // }
  // }

  render () {
    let profile, username, groupsJoined, eventsJoined, groupsOwned;
    if (this.props.profile) {
      profile = this.props.profile;
      username = profile.username;
      groupsJoined = profile.groups_joined.map(data => (
        <Link to={`groups/${data.id}`} className='group-info-items link'>{data.title}</Link>
      ));
      groupsOwned = profile.groups_owned.map(data => (
        <Link to={`groups/${data.id}`} className='group-info-items link'>{data.title}</Link>
      ));
      // <GroupListItem key={data.id} title={data.title} imageUrl={data.image_url} groupId={data.id} />
      console.log(profile.events_joined);
      eventsJoined = profile.events_joined.map(data => (
        <Link to={`groups/${data.group_id}/events/${data.id}`} className='group-info-items link'>{data.name}</Link>
      ));
    }
    // <EventListItem event={data} group={data.group} />
    return (
      <div>
        <div className='group-detail-page'>
          <div className='group-header'>
              <h1>{username}</h1>
              <div className='group-navbar-delete'>
            <ul className='group-navbar'>

            </ul>
            </div>
          </div>

          <div className='group-content'>
            <div className='group-info'>
              <div className='group-city-name'>Memberships:</div>
              {groupsJoined}
              <div className='group-city-name'>ScientUps you created:</div>
              {groupsOwned}
            </div>

          <div className='group-detail'>
            <div className='group-city-name'>Events joined:</div>
            {eventsJoined}
          </div>
          </div>

        </div>
      </div>
    );
  }
}

// <div className='group-city-name'>{group.city_name}</div>
// <div className='created-at'>Created at: {Date(group.created_at).slice(0, 15)}</div>
// <div className='group-info-items'
//   onClick={this.organizators}>
//   <p>Organizators:</p>
//   <p>{organizators}</p>
// </div>
// <div className='group-info-items' onClick={this.members}>
//   <p>Members:</p>
//   <p>{memberCount}</p>
// </div>
// <div className='group-info-items'>
//   <p>Upcoming Events:</p>
//   <p>{this.props.events[0].length}</p>
// </div>
// <div className='group-info-items'>
//   <p>Past Events:</p>
//   <p>{this.props.events[1].length}</p>
// </div>
// <div className='group-info-items'>
//   <Link to={`groups/${group.id}/events/new`} className='group-join-buttons link' onClick={this.newEvent}>Create Event</Link>

export default Profile;
