import React from 'react';
import {Link} from 'react-router';




const GroupListItem = ({ title, imageUrl, groupId }) => {
  let groupItemStyle = {
    width: "300px",
    height: "200px",
    filter: "brightness(90%)",
    backgroundImage: `url(${imageUrl})`
  };
  return (
    <Link to={`groups/${groupId}`}>
      <li className='group-item' style={groupItemStyle}>
          <h3>{title}</h3>
      </li>
  </Link>
  );
};

export default GroupListItem;
