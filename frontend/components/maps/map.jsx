import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.initMap = this.initMap.bind(this);
  }

  initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });
    let infoWindow = new google.maps.InfoWindow({map: map});
    let pos = {
             lat: this.props.lat,
             lng: this.props.lng
    };

     infoWindow.setPosition(pos);
     infoWindow.setContent('Location found.');
     map.setCenter(pos);
  }

  render() {
    const initMap = () => {
      let uluru = {lat: -25.363, lng: 131.044};
      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
      });
      let marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    };
    return(
      <div id="map"></div>

    );
  }
}

export default Map;
