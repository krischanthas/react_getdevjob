import React, {Component} from 'react';
import './google_maps.css';

class GoogleMap extends Component {
    componentDidUpdate(prevProps){
        const {lat, lng, isOpen} = this.props;

        if(!prevProps.isOpen && isOpen){
            this.map = new googleMap.Map(this.map, {
                center: {lat, lng},
                zoom: 17
            });
            this.marker = new google.maps.Marker({
                position: {lat,lng},
                map: this.map,
                title: 'Hello World!'
              });
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
