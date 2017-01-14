import React from 'react';
import HeaderContainer from '../header/header_container';
import {Link} from 'react-router';

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
        <div className='group-detail-page'>
          <div className='group-header'>
              <h1>{group.title}</h1>
            <ul className='group-navbar'>
              <li><Link to={`groups/${this.props.params.groupId}`}>Home</Link></li>
            </ul>
          </div>

          <h1>THIS IS GROUP DETAIL FOR {group.title} </h1>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default GroupDetail;
