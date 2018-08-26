import React, {Component} from 'react';
import './google_maps.css';

class GoogleMap extends Component {

    constructor(props){
        super(props);

        this.state={
            lat:'',
            lng:''
        }
    }

    componentDidUpdate(prevProps){
        const {lat, lng, isOpen} = this.props;

        if(!prevProps.isOpen && isOpen){
            let map = this.map = new googleMap.Map(this.map, {
                center: {lat, lng},
                zoom: 17
            });
            this.marker = new google.maps.Marker({
                position: {lat,lng},
                map: this.map,
                title: 'Company Location'
              });
            
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                  var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                  };
                  this.marker = new google.maps.Marker({
                    position: pos,
                    map: map,
                    title: 'Your Current Location'
                  });
                    
                 
                  map.setCenter(pos);
                })
                }
              }
        }
    
    
    render(){
        return (
            <div className ="googleContainer">
                <div ref={(e) => this.map = e} className="map"></div>
            </div>
        )
    }
}

export default GoogleMap;
