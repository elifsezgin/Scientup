import React from 'react';
import HeaderContainer from '../header/header_container';

class GroupDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestGroup(parseInt(this.props.params.groupId));
  }

  render(){
    const group = this.props.group;

    return (
      <div>
        <HeaderContainer />
        <h1>THIS IS GROUP DETAIL FOR {group.title} </h1>
        {this.props.children}
      </div>
    );
  }
}

export default GroupDetail;
