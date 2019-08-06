import React from 'react';
import GroupListContainer from '../groups/group_list_container';
import EventListContainer from '../events/event_list_container';
import MainHeader from '../header/main_header';
import SearchContainer from '../search/search_container';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      fetchAction: 'groups'
    };
    this.fetchAction = this.fetchAction.bind(this);
    this.fetchGroups = this.fetchGroups.bind(this);
    this.fetchEvents = this.fetchEvents.bind(this);
  }

  componentDidMount () {

    if (this.props.groupDetail) {
      this.props.receiveGroup(null);
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

  fetchAction() {
    if (this.state.fetchAction === 'groups') {
      return(<GroupListContainer />);
    } else {
      return(<EventListContainer display='all'/>);
    }
  }

  render() {
    return (
      <div className='home-components'>
        <MainHeader userLoggedIn={Boolean(this.props.currentUser)} />
        <div className='search-container'>
          <SearchContainer fetchAction={this.state.fetchAction} />
          <div className='group-event-switch'>
            <div key={'groups'}className='switch-buttons' onClick={this.fetchGroups}>Groups</div>
            <div key={'events'} className='switch-buttons' onClick={this.fetchEvents}>Events</div>
          </div>
          </div>
          {this.fetchAction()}
      </div>
    );
  }
}


export default Home;
