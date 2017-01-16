import React from 'react';
import {withRouter} from 'react-router';

class EventDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div>
        {this.props.event.name}
      </div>
    );
  }
}

export default withRouter(EventDetail);
