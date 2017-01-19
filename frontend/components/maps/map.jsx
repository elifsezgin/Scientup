import React from 'react';
import ReactDOM from 'react-dom';


class Map extends React.Component {
  constructor(props) {
    super(props);
    this.addPlace = this.addPlace.bind(this);
  }

  componentWillReceiveProps(newProps) {
    let lat = newProps.event.lat;
    let lng = newProps.event.lng;

    const map = (this.refs.map);
    this.map = new google.maps.Map(map, {
      center: {lat: lat, lng: lng},
      zoom: 14
    });
    if (newProps.event) {
      this.addPlace(newProps.event);
    } else if (newProps.events) {
      newProps.events.forEach(event => (
        this.addPlace(event)
    ));
    }
  }

  addPlace(eventItem) {
    // debugger;
    console.log(eventItem);
    const pos = new google.maps.LatLng(eventItem.lat, eventItem.lng);
          //then we use our new instance of LatLng to make a marker
    const marker = new google.maps.Marker({
            position: pos,
            //set map to this.map, this is what adds it to the map
            //when we want to remove this marker, we need to set its
            //map property to null using myMarker.setMap(null)
            map: this.map
          });

    marker.addListener('click', () => {
      alert(`clicked on: ${eventItem.name}`);
    });
  }


  render() {

    return(
      <div className="map" id='map' ref='map'>Map</div>
    );
  }
}

export default Map;
