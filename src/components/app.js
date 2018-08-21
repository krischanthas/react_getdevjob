import React from 'react';
import LandingPage from './landing_page';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SearchResults from './search_results';
import BusinessModal from './business_modal';

const App = () => (
    <Router>
    	<div className="test" style={{'position':'relative'}}>
	    	<Route exact path = '/' component ={LandingPage}/>
			<Route path ='/s' component = {SearchResults}/>
			<Route path ='/s/webdeveloper/irvine/m' component = {BusinessModal}/>
		</div>	
    </Router>	
    
);

export default App;
