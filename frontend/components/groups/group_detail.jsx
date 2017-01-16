import React from 'react';
import {Link, withRouter} from 'react-router';
import NewEventContainer from '../events/new_event_container';
import EventListItem from '../events/event_list_item';

class GroupDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: 'description'
    };
    this.deleteGroup = this.deleteGroup.bind(this);
    this.editGroup = this.editGroup.bind(this);
    this.addMember = this.addMember.bind(this);
    this.removeMember = this.removeMember.bind(this);
    this.joinLeaveGroup = this.joinLeaveGroup.bind(this);
    this.newEvent = this.newEvent.bind(this);
    this.description = this.description.bind(this);
  }

  componentDidMount () {
    this.props.requestGroup(parseInt(this.props.params.groupId));
  }

  deleteGroup () {
    this.props.deleteGroup(parseInt(this.props.params.groupId)).then(()=>
    this.props.router.push('/'));
  }

  newEvent () {
    this.setState({
      activity: 'newEvent'
    });
  }

  description () {
    this.setState({
      activity: 'description'
    });
  }

  editGroup () {
    // TODO: should render new group page with filled in data
  }

  addMember () {
    this.props.addMember({group_id: this.props.group.id, user_id: this.props.currentUser.id});
  }

  removeMember () {
    this.props.deleteMember(this.props.group.id);
  }

  joinLeaveGroup () {
    const currentUser = this.props.currentUser;
    let button;

    if (this.props.group.members) {
      this.props.group.members.forEach(member => {
        if (member.username === currentUser.username) {
          button = (<button
              className='group-navbar-item delete-edit'
              onClick={this.removeMember}>Leave Group</button>);
      }});
    }
    if (button) {
      return button;
    } else {
      return (
          <button
            className='group-navbar-item delete-edit'
            onClick={this.addMember}>Join Group</button>
        );
    }
  }

  displayActivity (group) {
    if (this.state.activity === 'description') {
      const events = (group.events ? (
        <ul>
          <div className='events-header'>Group activities:</div>
          {group.events.map((event, idx) => (
            <EventListItem key={idx} event={event} group={group}/>
          ))}
        </ul>
      ) : null);
      return(
        <div>
          <div className='group-description'>{group.description}</div>
          {events}
        </div>
      );
    } else if (this.state.activity === 'newEvent') {
      return(
        <NewEventContainer />
      );
    }
  }

  render(){
    const group = this.props.group;
    let organizators = null;
    let authRequiredActions = null;
    if (group.organizers) {
      organizators = group.organizers.map((organizer, idx) => (
        <li key={idx} className='group-info-items'>{organizer.username}</li>
      ));
      group.organizers.forEach(organizer => {
        if (organizer.username === this.props.currentUser.username) {
          authRequiredActions = (
            <ul>
              <li><button className='group-navbar-item delete-edit' onClick={this.editGroup}>Edit Group</button></li>
              <li><button className='group-navbar-item delete-edit' onClick={this.deleteGroup}>Delete Group</button></li>
            </ul>
          );
        }
      });
    }
    let memberCount = (group.members) ? group.members.length : 0;


    return (
      <div>
        <div className='group-detail-page'>
          <div className='group-header'>
              <h1>{group.title}</h1>
              <div className='group-navbar-delete'>
            <ul className='group-navbar'>
              <li><div className='group-navbar-item' onClick={this.description}>Home</div></li>
              <li><div className='group-navbar-item'>Members</div></li>
            </ul>
            <ul className='group-navbar'>
            <li>{this.joinLeaveGroup()}</li>
            {authRequiredActions}
            </ul>
            </div>
          </div>

          <div className='group-content'>
            <div className='group-info'>
              <img src={group.image_url}></img>
              <div className='group-city-name'>{group.city_name}</div>
              <div className='created-at'>Created at: {Date(group.created_at).slice(0, 15)}</div>
              <div className='group-info-items'>
                <p>Organizators:</p>
                {organizators}
              </div>
              <div className='group-info-items'>
                <p>Members:</p>
                <p>{memberCount}</p>
              </div>
              <div className='group-info-items'>
                <p>Upcoming Events:</p>
                <p>12</p>
              </div>
              <div className='group-info-items'>
                <p>Past Events:</p>
                <p>42</p>
              </div>
              <div className='group-info-items'>
                <button className='group-navbar-item' onClick={this.newEvent}>Create Event</button>
              </div>
            </div>
            <div className='group-detail'>
              {this.displayActivity(group)}
            </div>

          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(GroupDetail);
