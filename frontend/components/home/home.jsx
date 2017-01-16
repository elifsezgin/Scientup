import React from 'react';
import GroupListContainer from '../groups/group_list_container';
import MainHeader from '../header/main_header';

class Home extends React.Component {
  render() {
    return (
      <div>
        <MainHeader userLoggedIn={Boolean(this.props.currentUser)} />
        <GroupListContainer />

      </div>
    );
  }
}

export default Home;
