import React, {Component} from 'react';
import './google_maps.css';

class GoogleMap extends Component {

    constructor(props){
        super(props);

        this.state = {
            map:false
        }
    }

    componentDidUpdate(prevProps){
        const {lat, lng, isOpen, drivingInfo} = this.props;
        if(!prevProps.isOpen && isOpen){
            let map = this.map = new googleMap.Map(this.map, {
                center: {lat, lng},
                zoom: 17
            });
            let panorama = this.panorama = new googleMap.StreetViewPanorama(
                this.panorama, {
                  position: {lat,lng},
                  pov: {
                    heading: 34,
                    pitch: 10
                  }
                });
            map.setStreetView(panorama);

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                  var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                  };
                  displayRoute(pos.lat,pos.lng,lat,lng);
                })
            }
            function displayRoute(originLat,originLng, destinationLat, destinationLng) {
                let service = new google.maps.DirectionsService;
                let display = new google.maps.DirectionsRenderer({
            
                    draggable: true,
                    map: map,
                    panel: document.getElementById('direction')
                });
            
                service.route({
                    origin: new googleMap.LatLng(originLat,originLng),
                    destination: new googleMap.LatLng(destinationLat,destinationLng),
                    travelMode: 'DRIVING',
                    drivingOptions: {
                        departureTime: new Date(Date.now()),
                        trafficModel:'bestguess'
                    },
                    avoidTolls: true,
                    unitSystem: googleMap.UnitSystem.IMPERIAL
                }, function(response, status) {
                  
                    if (status === 'OK') {
                        let distance = response.routes[0].legs[0].distance.text
                        let duration = response.routes[0].legs[0].duration.text
                        drivingInfo(distance,duration);
                        display.setDirections(response);
                    } else {
                        alert('Could not display directions due to: ' + status);
                    }
                });
            }
            
        }
    }

    toggleMap(event){
        let modalMap = document.getElementById("map");
        let modalStreetview = document.getElementById("pano");
        debugger;
        if(this.state.map === true){
           this.setState({
               map:false
           }) ;
            modalMap.style.zIndex = 2;
            modalStreetview.style.zIndex = 1;

            return;
        } else {
            this.setState({
                map:true
            }) ;
            modalMap.style.zIndex = 1;
            modalStreetview.style.zIndex = 2;
        }
    }
    
    render(){
        return (
            <div className ="googleContainer">
                <div ref={(e) => this.map = e} id = "map" className="map"></div>
                <div id="pano" ref={(e) => this.panorama = e}></div>
                <button className = "mapStreetViewToggle btn" onClick={this.toggleMap.bind(this)} >Street View</button>
            </div>
        )
    }
}

export default GoogleMap;
