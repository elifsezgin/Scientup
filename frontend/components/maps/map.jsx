import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';


class Map extends React.Component {
  constructor(props) {
    super(props);
    this.addPlace = this.addPlace.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }

  componentDidMount() {
    let lat = this.props.lat;
    let lng = this.props.lng;
    if (this.props.event && Object.keys(this.props.event).length > 0) {
      lat = this.props.event.lat;
      lng = this.props.event.lng;
    }


    const map = (this.refs.map);
    this.map = new google.maps.Map(map, {
      center: {lat, lng},
      zoom: 11
    });

    this.geocoder = new google.maps.Geocoder;
    this.infowindow = new google.maps.InfoWindow;
    this.bounds = new google.maps.LatLngBounds;

    this.getLocation(this.map);

    if (this.props.address) {
      this.geocodeAddress(this.geocoder, this.map, this.props.address);
    }
  }

  componentWillReceiveProps(newProps) {
    let lat = parseInt(newProps.lat);
    let lng = parseInt(newProps.lng);
    if (newProps.event) {
      lat = newProps.event.lat;
      lng = newProps.event.lng;
    }

    const map = (this.refs.map);
    this.map = new google.maps.Map(map, {
      center: {lat: lat, lng: lng},
      zoom: 14
    });
    if (newProps.event) {
      this.addPlace(newProps.event);
    } else if (newProps.events) {
      newProps.events.forEach(event => {
        this.addPlace(event);
    });
    }
    this.map.fitBounds(this.bounds);
    this.getLocation(this.map);

    if (newProps.address) {
      this.geocodeAddress(this.geocoder, this.map, newProps.address);
    }
  }

  addPlace(eventItem) {
    const pos = new google.maps.LatLng(eventItem.lat, eventItem.lng);
    const marker = new google.maps.Marker({
            position: pos,
            map: this.map
          });
    this.bounds.extend(marker.position);
    let that = this;
    marker.addListener('click', () => {
      that.infowindow.setContent(`<a className="link" href=#/groups/${eventItem.group.id}/events/${eventItem.id}>${eventItem.name}</a>`);
      that.infowindow.open(that.map, marker);
    });


  }

  getLocation (map) {
    map.addListener('click', (event) => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      if (this.props.handleLocationChange) {
        this.props.handleLocationChange(lat, lng);
      }
      if (this.props.handleAddressChange) {
        this.geocodeLatLng(this.geocoder, map, this.infowindow, lat, lng);
      }
    });
  }

 geocodeLatLng(geocoder, map, infowindow, lat, lng) {

  let latlng = {lat, lng};
  let that = this;
  this.geocoder.geocode({'location': latlng}, (results, status) => {
    if (status === 'OK') {
      if (results[1]) {
        map.setZoom(14);
        const marker = new google.maps.Marker({
          position: latlng,
          map: map
        });
        that.props.handleAddressChange(results[1].formatted_address);
        infowindow.setContent(results[1].formatted_address);
        infowindow.open(map, marker);
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
}

  geocodeAddress(geocoder, resultsMap, address) {
    geocoder.geocode({'address': address}, function(results, status) {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
        resultsMap.setZoom(14);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }


  render() {
    return(
      <div className="map" id='map' ref='map'>Map</div>
    );
  }
}

export default Map;
