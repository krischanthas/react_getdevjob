import React from 'react';
import LandingPage from './landing_page';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SearchResults from './search_results';

const App = () => (
    <Router>
    	<div>
	    	<Route exact path = '/' component ={LandingPage}/>
			<Route path ='/searchresults' component = {SearchResults}/>
		</div>	
    </Router>	
    
);

export default App;
