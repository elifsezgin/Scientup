import React from 'react';
import {withRouter} from 'react-router';

class EventDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestEvent(parseInt(this.props.params.eventId));
  }

  componentWillReceiveProps() {
    this.props.requestEvent(parseInt(this.props.params.eventId));
  }

  render () {
    return(
      <div>
        {this.props.event.name}
        <h1>EVENT DETAIL</h1>
      </div>
    );
  }
}

export default withRouter(EventDetail);
