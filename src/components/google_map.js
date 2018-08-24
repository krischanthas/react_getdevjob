import React, {Component} from 'react';
import './google_maps.css';

class GoogleMap extends Component {
    componentDidUpdate(prevProps){
        const {lat, lng, isOpen} = this.props;

        if(!prevProps.isOpen && isOpen){
            this.map = new googleMap.Map(this.map, {
                center: {lat, lng},
                zoom: 14
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
