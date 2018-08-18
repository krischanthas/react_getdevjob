import React, {Component} from 'react';
import './google_maps.css';

class GoogleMap extends Component {
    render(){
        return (
            <div className ="googleContainer">
                <input id="pac-input" className="controls" type="text" placeholder="Search Box"/>
                <div id = "map">Map goes HEre</div>
            </div>


        )

    }
}

export default GoogleMap;
