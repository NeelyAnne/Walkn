import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import axios from "axios";

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
    currentLng: -84.3233,
    locations: []
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.getLocations().then(locations => {
        this.setState({
          currentLat: position.coords.latitude,
          currentLng: position.coords.longitude,
          locations: locations
        });
      });
    });
  }

  getLocations = () => {
    return axios.get("/api/locations").then(res => res.data);
  };

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
    return (
      <div>
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
          {this.state.locations.map((pos, i) => (
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
              <h4>{"Address: " + this.state.infoWindowContent.address}</h4>
              <h4>{"Category: " + this.state.infoWindowContent.category}</h4>
              <h4>
                {"Rating (1 to 4): " + this.state.infoWindowContent.rating}
              </h4>
              <h4>
                {"Description: " + this.state.infoWindowContent.description}
              </h4>

            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDPV1v8HHD1e2o7mbOlSI_8AaRy1J8CdNg"
})(MapContainer);
