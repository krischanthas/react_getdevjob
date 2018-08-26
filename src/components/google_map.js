import React, {Component} from 'react';
import './google_maps.css';

class GoogleMap extends Component {

    constructor(props){
        super(props);

        this.state={
            distance:'',
            duration:'',
            duration_in_traffic:''
        }

    }

    componentDidUpdate(prevProps){
        const {lat, lng, isOpen} = this.props;

        if(!prevProps.isOpen && isOpen){
            let map = this.map = new googleMap.Map(this.map, {
                center: {lat, lng},
                zoom: 17
            });

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
                       console.log("GOOGLE DIRECTION RESPONSE",response.routes[0].legs);
                       console.log("Distance",response.routes[0].legs[0].distance.text);
                       console.log("Duration",response.routes[0].legs[0].duration.text);
                       console.log("Traffic Duration", response.routes[0].legs[0].duration_in_traffic.text);
                    //    this.setState({
                    //        distance: response.routes[0].legs[0].distance.text,
                    //        duration: response.routes[0].legs[0].duration.text,
                    //        duration_in_traffic: response.routes[0].legs[0].duration_in_traffic.text
                    //    })
                        display.setDirections(response);
                    } else {
                        alert('Could not display directions due to: ' + status);
                    }
                });
            }
            
        }
    }
    
    render(){
        const{distance,duration,duration_in_traffic} = this.state;
        return (
            <div className ="googleContainer">
                <div ref={(e) => this.map = e} className="map"></div>
                <p>{distance}</p>
                <p>{duration}</p>
                <p>{duration_in_traffic}</p>
            </div>
        )
    }
}

export default GoogleMap;
