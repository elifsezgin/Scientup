import React from 'react';
import {Link, withRouter} from 'react-router';
import GroupListItem from './group_list_item';

class GroupList extends React.Component {
  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
  }

  componentDidMount () {
    this.props.requestAllGroups();
  }

  test() {
  }


  render () {
    window.props = this.props;
    const groups = this.props.groups.map(data => (
      <GroupListItem key={data.id} title={data.title} image_url={data.image_url} />
      )
    );
    return (
      <div>
        <h1>THIS IS GROUPS</h1>
        {groups}
        {this.props.children}
      </div>
    );
  }
}

export default GroupList;
