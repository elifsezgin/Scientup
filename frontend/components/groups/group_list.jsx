import React from 'react';
import {Link, withRouter} from 'react-router';
import GroupListItem from './group_list_item';

class GroupList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestAllGroups();
  }


  render () {
    window.props = this.props;
    const groups = this.props.groups.map(data => (
      <GroupListItem key={data.id} title={data.title} imageUrl={data.image_url} groupId={data.id} />
      )
    );
    return (
      <div className="group-list">
        {groups}
        {this.props.children}
      </div>
    );
  }
}

export default GroupList;
