import React from 'react';
import LandingPage from './landing_page';
import {Switch, Route} from 'react-router-dom';
import SearchResults from './search_results';
import SingleJobPage from './single_job_page.js';
import AboutUs from './about_us.js';
import PageNotFound from './page_not_found.js';

const App = () => (   
    	<div className="test" style={{'position':'relative'}}>
	    	<Switch>	
		    	<Route exact path = '/' component ={LandingPage}/>
		    	<Route path = '/about-us' component = {AboutUs}/>
				<Route exact path ='/listings/:job/:city' component = {SearchResults}/>
				<Route path ='/listings/:job/:city/:job_id' component = {SingleJobPage}/>
				<Route component = {PageNotFound}/>
			</Switch>
		</div>	  
);

export default App;
