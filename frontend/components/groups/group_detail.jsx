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
              <li><Link to={`groups/${this.props.params.groupId}`} className='group-navbar-item'>Home</Link></li>
              <li><a href='#' className='group-navbar-item'>Members</a></li>
            </ul>
          </div>

          <div className='group-content'>
            <div className='group-info'>
              <img src={group.image_url}></img>
              <p className='group-city-name'>{group.city_name}</p>
              <p className='created-at'>{Date(group.created_at)}</p>
              <p className='group-info-items'>
                <p>Members:</p>
                <p>10</p>
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

export default GroupDetail;
