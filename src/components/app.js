import React from 'react';
import LandingPage from './landing_page';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SearchResults from './search_results';
import BusinessModal from './business_modal';

const App = () => (   
    	<div className="test" style={{'position':'relative'}}>
	    	<Route exact path = '/' component ={LandingPage}/>
			<Route path ='/:job/:city' component = {SearchResults}/>
			<Route path ='/:job/:city/:job_id' component = {BusinessModal}/>
		</div>	  
);

export default App;
