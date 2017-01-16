import React from 'react';
import HeaderContainer from '../header/header_container';
import {Link, withRouter} from 'react-router';

class GroupDetail extends React.Component {
  constructor(props) {
    super(props);
    this.deleteGroup = this.deleteGroup.bind(this);
    this.editGroup = this.editGroup.bind(this);
    this.addMember = this.addMember.bind(this);
    this.removeMember = this.removeMember.bind(this);
    this.joinLeaveGroup = this.joinLeaveGroup.bind(this);
  }

  componentDidMount () {
    this.props.requestGroup(parseInt(this.props.params.groupId));
  }

  deleteGroup () {
    this.props.deleteGroup(parseInt(this.props.params.groupId)).then(()=>
    this.props.router.push('/'));
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


  render(){
    const group = this.props.group;
    let organizators = null;
    if (group.organizers) {
      organizators = group.organizers.map((organizer, idx) => (
        <li key={idx} className='group-info-items'>{organizer.username}</li>
      ));
    }
    let memberCount = (group.members) ? group.members.length : 0;
    return (
      <div>
        <HeaderContainer />
        <div className='group-detail-page'>
          <div className='group-header'>
              <h1>{group.title}</h1>
              <div className='group-navbar-delete'>
            <ul className='group-navbar'>
              <li><Link to={`groups/${this.props.params.groupId}`} className='group-navbar-item'>Home</Link></li>
              <li><a href='#' className='group-navbar-item'>Members</a></li>
            </ul>
            <ul className='group-navbar'>
            <li>{this.joinLeaveGroup()}</li>
            <li><button className='group-navbar-item delete-edit' onClick={this.editGroup}>Edit Group</button></li>
            <li><button className='group-navbar-item delete-edit' onClick={this.deleteGroup}>Delete Group</button></li>
            </ul>
            </div>
          </div>

          <div className='group-content'>
            <div className='group-info'>
              <img src={group.image_url}></img>
              <p className='group-city-name'>{group.city_name}</p>
              <p className='created-at'>Created at: {Date(group.created_at).slice(0, 15)}</p>
              <div className='group-info-items'>
                <p>Organizators:</p>
                {organizators}
              </div>
              <p className='group-info-items'>
                <p>Members:</p>
                <p>{memberCount}</p>
              </p>
              <p className='group-info-items'>
                <p>Upcoming Scientups:</p>
                <p>12</p>
              </p>
              <p className='group-info-items'>
                <p>Past Scientups:</p>
                <p>42</p>
              </p>
            </div>
            <div className='group-detail'>
              <p>{group.description}</p>
            </div>

          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(GroupDetail);
