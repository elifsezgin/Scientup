import React from 'react';
import {withRouter} from 'react-router';
import MapContainer from '../maps/map_container';


class NewEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      date: '',
      time: '',
      group_id: '',
      address: '',
      addressUpdate: '',
      lat: '',
      lng: ''
    };


    this.placeSearch = '';
    this.autocomplete = '';
    this.componentForm = {
            street_number: 'short_name',
            route: 'long_name',
            locality: 'long_name',
            administrative_area_level_1: 'short_name',
            country: 'long_name',
            postal_code: 'short_name'
          };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.initAutocomplete = this.initAutocomplete.bind(this);
  }

  componentDidMount () {
    this.initAutocomplete();
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const event = Object.assign({}, this.state);
    event.group_id = this.props.group_id;
    this.props.createEvent({ event }).then((data)=>{
      return (this.props.router.push(`groups/${event.group_id}/events/${data.event.id}`));
      }
    );
  }

  handleLocationChange(lat, lng) {
    this.setState({
      lat,
      lng
    });
  }

  handleAddressChange(address) {
    this.setState({
      address: address,
      addressUpdate: address
    });
  }

  update(property) {
   return e => this.setState({ [property]: e.target.value });
  }

  initAutocomplete() {
    this.autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
        {types: ['geocode']});
    let that = this;
    this.autocomplete.addListener('place_changed', () => {
      let place = that.autocomplete.getPlace();
      that.setState({
        addressUpdate: place.formatted_address
      });

      that.setState({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      });
      that.handleAddressChange(place.formatted_address);
    });
  }

  render () {
    window.state = this.state;
    window.props = this.props;
    const placeholderCityName = (this.props.cityName) ? (this.props.cityName) : 'San Francisco';
    return (
      <div>
        <form className='event-creation-form'>

          <h6>FIRST STEP</h6>

          <label className='event-creation-labels'>
            <i className="fa fa-question icons" aria-hidden="true"></i>
            What is your event called?</label>
          <input className="event-creation-input"
                   type="text"
                   value={this.state.name}
                   placeholder='Your event name here.'
                   onChange={this.update('name')}/>

                 <h6>SECOND STEP</h6>
          <label className='event-creation-labels'>
            <i className="fa fa-calendar-check-o icons" aria-hidden="true"></i>
            When is your event?</label>
          <input className="event-creation-input"
                   type="date"
                   value={this.state.date}
                   onChange={this.update('date')}/>
                 <input className="event-creation-input"
                   type="time"
                   value={this.state.time}
                   onChange={this.update('time')}/>
                 <h6>THIRD STEP</h6>
          <label className='event-creation-labels'>
            <i className="fa fa-calendar-check-o icons" aria-hidden="true"></i>
            Where is your event going to take place?</label>







              <input className="event-creation-input"
                       type="text"
                       value={this.state.addressUpdate}
                       id="autocomplete"
                       placeholder="Enter your address"
                       onChange={this.update('addressUpdate')}
                        />



                 <MapContainer
                   handleLocationChange={this.handleLocationChange}
                   handleAddressChange={this.handleAddressChange}
                   address={this.state.address}/>


                   <label className='event-creation-labels'>
                     <i className="fa fa-calendar-check-o icons" aria-hidden="true"></i>
                     Latitude:</label>
                   <input id='lat' className="event-creation-input"
                            type="float"
                            value={this.state.lat}
                            onChange={this.update('lat')}
                            disabled="disabled"/>

                          <label id='lng' className='event-creation-labels'>
                    <i className="fa fa-calendar-check-o icons" aria-hidden="true"></i>
                    Longitude:</label>
                  <input className="event-creation-input"
                           type="float"
                           value={this.state.lng}
                           onChange={this.update('lng')}
                           disabled="disabled"/>


                         <h6>FOURTH STEP</h6>
          <label className='event-creation-labels'>
            <i className="fa fa-pencil-square-o icons" aria-hidden="true"></i>
            What is your event about?</label>
          <textarea className="event-creation-input"
                   value={this.state.description}
                   placeholder="Your description here"
                   onChange={this.update('description')}></textarea>

                 <input className="event-creation-button"
                 type="submit"
                 onClick={this.handleSubmit}
                 value="Create Your Event"/>
                 <br/>

          <br/><br/>
        </form>
      </div>
    );
  }
}

export default withRouter(NewEvent);
