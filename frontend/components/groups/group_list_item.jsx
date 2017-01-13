import React from 'react';
import {Link} from 'react-router';

const GroupListItem = ({ title, image_url }) => (
  <li className='group-index-item'>
    <h3>{title}</h3>
    <img src={image_url}/>
  </li>
);

export default GroupListItem;
