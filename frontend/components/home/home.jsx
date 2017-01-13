import React from 'react';
import HeaderContainer from '../header/header_container';
import GroupListContainer from '../groups/group_list_container';

class Home extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <HeaderContainer />
        <GroupListContainer />

      </div>
    );
  }
}

export default Home;
