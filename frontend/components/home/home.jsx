import React from 'react';
import GroupListContainer from '../groups/group_list_container';
import EventListContainer from '../events/event_list_container';
import MainHeader from '../header/main_header';
import SearchContainer from '../search/search_container';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      fetchAction: 'group'
    };
    this.fetchAction = this.fetchAction.bind(this);
    this.fetchGroups = this.fetchGroups.bind(this);
    this.fetchEvents = this.fetchEvents.bind(this);
  }

  fetchAction() {
    if (this.state.fetchAction === 'group') {
      return(<GroupListContainer />);
    } else {
      return(<EventListContainer />);
    }
  }

  fetchGroups() {
    this.setState({
      fetchAction: 'groups'
    });
  }

  fetchEvents() {
    this.setState({
      fetchAction: 'events'
    });
  }

  render() {
    return (
      <div className='home-components'>
        <MainHeader userLoggedIn={Boolean(this.props.currentUser)} />
        <div className='search-container'>
          <SearchContainer />
          <div className='group-event-switch'>
            <div className='switch-buttons' onClick={this.fetchGroups}>Groups</div>
            <div className='switch-buttons' onClick={this.fetchEvents}>Events</div>
          </div>
          </div>
          {this.fetchAction()}
      </div>
    );
  }
}
// <GroupListContainer />

export default Home;
