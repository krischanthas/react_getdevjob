import React, {Component} from 'react';
import './google_maps.css';

class GoogleMap extends Component {
    componentDidUpdate(prevProps){
        console.log('Google Map:', googleMap);
        const {lat, lng, isOpen} = this.props;

        if(!prevProps.isOpen && isOpen){
            console.log('THE MODAL HAS OPENED SAYS GOOGLE MAP COMPONENT');

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
