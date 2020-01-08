import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%"
};
export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    infoWindowContent: {},
    currentLat: 34.9,
    currentLng: -84.3233
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        currentLat: position.coords.latitude,
        currentLng: position.coords.longitude
      });
    });
  }

  onMarkerClick = (props, marker, e, infoWindowContent) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      infoWindowContent: infoWindowContent
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const markerPositions = [
      { lat: 33.89, lng: -84.23, name: "Tacos", type: "food", paws: "4" },
      { lat: 33.99, lng: -84.23, name: "fajitas", type: "food", paws: "3" }
    ];
    return (
      <Map
        key={`${this.state.currentLat}-${this.state.currentLng}`}
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
          lat: this.state.currentLat,
          lng: this.state.currentLng
        }}
      >
        {markerPositions.map((pos, i) => (
          <Marker
            key={i}
            position={{ lat: pos.lat, lng: pos.lng }}
            onClick={(props, marker, e) =>
              this.onMarkerClick(props, marker, e, pos)
            }
          />
        ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h1>{this.state.infoWindowContent.name}</h1>
            <h4>{this.state.infoWindowContent.type}</h4>
            <h4>{"rating :" + this.state.infoWindowContent.paws + "/4"}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDPV1v8HHD1e2o7mbOlSI_8AaRy1J8CdNg"
})(MapContainer);
