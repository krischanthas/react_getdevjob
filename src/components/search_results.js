import React, { Component } from 'react';
import './search_results.css';
import NavBar from './nav_bar';

class SearchResults extends Component {
	render() {
		return (
			<div className = 'main-cont'>
				<NavBar/>
				<div className = 'cardArea'>
                   	<div className='leftColumn'>
	                    <div className='card card-panel search-result'></div>
	                    <div className='card card-panel search-result'></div>
	                </div>    
                	<div className='rightColumn'>
                    	<div className='card card-panel search-result'></div>
                    	<div className='card card-panel search-result'></div>
                	</div>
                </div>	
			</div>

		);
	}
}

export default SearchResults;
