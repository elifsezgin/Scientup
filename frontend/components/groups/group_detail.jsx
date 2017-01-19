import React from 'react';
import {Link, withRouter} from 'react-router';
import NewEventContainer from '../events/new_event_container';
import EventListItem from '../events/event_list_item';
import EventListContainer from '../events/event_list_container';
import GroupInfoContainer from '../groups/group_info_container';
import Modal from 'react-modal';

class GroupDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: 'groupDetail',
      modalOpen: false
    };
    this.deleteGroup = this.deleteGroup.bind(this);
    this.editGroup = this.editGroup.bind(this);
    this.groupDetail = this.groupDetail.bind(this);
    this.members = this.members.bind(this);
    this.organizators = this.organizators.bind(this);
    this.addMember = this.addMember.bind(this);
    this.removeMember = this.removeMember.bind(this);
    this.joinLeaveGroup = this.joinLeaveGroup.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleYes = this.handleYes.bind(this);
    this.handleNo = this.handleNo.bind(this);
  }

  componentDidMount () {
    this.props.requestGroup(parseInt(this.props.params.groupId));
  }

  deleteGroup () {
    this.props.deleteGroup(parseInt(this.props.params.groupId)).then(()=>
    this.props.router.push('/'));
  }

  groupDetail () {
    this.setState({navbar: 'groupDetail'});
  }

  members () {
    this.setState({navbar: 'members'});
  }

  organizators () {
    this.setState({navbar: 'organizators'});
  }

  editGroup () {
    // TODO: should render new group page with filled in data
  }

  addMember () {
    this.props.addMember({group_id: this.props.group.id, user_id: this.props.currentUser.id}).then(()=>
  this.props.clearErrors(), err =>
  this.openModal());
  }

  removeMember (data) {
    this.props.deleteMember(this.props.group.id, data).then(()=>
  this.props.clearErrors(),  err =>
  this.openModal());
  }

  joinLeaveGroup () {
    const currentUser = this.props.currentUser;
    let button;

    if (this.props.group.members) {
      this.props.group.members.forEach(member => {
        if (currentUser && member.username === currentUser.username) {
          button = (<button
              className='group-join-buttons'
              onClick={this.removeMember.bind(this, {deleteParticipations: false})}>Leave Group</button>);
      }});
    }
    if (button) {
      return button;
    } else {
      return (
          <button
            className='group-join-buttons'
            onClick={this.addMember}>Join Group</button>
        );
    }
  }

  openModal() {
    this.setState({
      modalOpen: true
    });
  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  handleYes () {
    this.removeMember({deleteParticipations: true});
    this.closeModal();
  }
  handleNo () {
    this.closeModal();
  }

  navbar () {
    switch (this.state.navbar) {
      case 'members':
      return (
        <div>{this.props.group.members.map((member, idx) => (
            <div key={idx} className='event-detail-participation'>
              <div className='event-detail-event-datetime'>{member.username}
              </div>
              <div className='event-detail-event-datetime'>-</div>
              <div className='event-detail-event-datetime'>{member.email}
              </div>

              </div>
          ))}</div>
      );
      case 'organizators':
      return (
        <div>{this.props.group.organizers.map((organizator, idx) => (
            <div key={idx} className='event-detail-participation'>
              <div className='event-detail-event-datetime'>{organizator.username}
              </div>
              <div className='event-detail-event-datetime'>-</div>
              <div className='event-detail-event-datetime'>{organizator.email}
              </div>

              </div>
          ))}</div>
      );
      default:
        return (
          <GroupInfoContainer />
        );
    }
  }

  renderErrors() {
    let errors;
    const ModalStyle = {
  overlay : {
    position          : 'fixed',
    top               : '0px',
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0,0,0,0.6)',
    transition: 'all 0.5s'
  },
  content : {
    padding: '0',
    boxShadow: "20px 20px 20px",
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : 'auto',
    backgroundColor       : '$gray',
    transform             : 'translate(-50%, -50%)',
    borderRadius          : '20px',
    backgroundColor : '#EDE5E2'
  }
  };
    if (this.props.errors.length > 0) {
      if (this.props.errors[0] === 'ALERT') {
        return (
          <Modal
            contentLabel='Modal'
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={ModalStyle}
            >
            <div className='auth-form centered'>
            <p className='event-detail-event-datetime modal-buttons'>You cannot join the events of the group if you leave. Do you want to leave all the joined upcoming events of this group?</p>
            <div>
              <div className='group-join-buttons modal-buttons' onClick={this.handleYes}>Yes, I will not join any of the events of this group</div>
              <div className='group-join-buttons modal-buttons' onClick={this.handleNo}>No, I will stay in the group</div>
            </div>
            </div>
        </Modal>
        )
      } else {
        errors = (<ul className='auth-errors'>
        {this.props.errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>);
      return(errors);
      }
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
        if (this.props.currentUser && (organizer.username === this.props.currentUser.username)) {
          authRequiredActions = (
            <ul className='group-navbar'>
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
              <li><Link to={`groups/${group.id}`} className='group-navbar-item link' onClick={this.groupDetail}>Details</Link></li>
              <li>
                <div className='group-navbar-item'
                  onClick={this.members}>Members</div></li>
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
              <div className='group-info-items'
                onClick={this.organizators}>
                <p>Organizators:</p>
                <p>{organizators}</p>
              </div>
              <div className='group-info-items' onClick={this.members}>
                <p>Members:</p>
                <p>{memberCount}</p>
              </div>
              <div className='group-info-items'>
                <p>Upcoming Events:</p>
                <p>{this.props.events[0].length}</p>
              </div>
              <div className='group-info-items'>
                <p>Past Events:</p>
                <p>{this.props.events[1].length}</p>
              </div>
              <div className='group-info-items'>
                <Link to={`groups/${group.id}/events/new`} className='group-join-buttons link' onClick={this.newEvent}>Create Event</Link>
              </div>
            </div>
            <div className='group-detail'>
              {this.renderErrors()}
              {(this.props.children) ? this.props.children : this.navbar() }
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(GroupDetail);
