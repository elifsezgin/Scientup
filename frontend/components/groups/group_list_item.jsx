import React from 'react';
import {Link} from 'react-router';


const GroupListItem = ({ title, imageUrl, groupId, memberCount, eventCount }) => {
  let groupItemStyle = {
    width: "350px",
    height: "250px",
    filter: "brightness(90%)",
    backgroundImage: `url(${imageUrl})`,
    borderRadius: "10px"
  };
  return (
    <Link className='link' to={`groups/${groupId}`}>
      <li className='group-item' style={groupItemStyle}>
          <h3>{title}</h3>
          <h4>{memberCount} members<br/>
          {eventCount} events</h4>
      </li>
  </Link>
  );
};

export default GroupListItem;
