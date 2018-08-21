import React, { Component } from 'react';
import './search_results.css';
import NavBar from './nav_bar';
import Card from './single_card';

class SearchResults extends Component {


	render() {
		console.log('search results', this.props.location.pathname)
		console.log('search results', this.props)
		return (
			<div className = 'main-cont'>
				<NavBar/>
				<div className = 'cardArea'>
                   	<div className='leftColumn'>
	                    {/* <div className='card card-panel search-result'> */}
						<Card {...this.props}/>
						<Card {...this.props}/>
						{/* </div> */}
	                    {/* <div className='card card-panel search-result'></div> */}
	                </div>    
                	<div className='rightColumn'>
					<Card {...this.props}/>
					<Card {...this.props}/>
                    	{/* <div className='card card-panel search-result'></div> */}
                    	{/* <div className='card card-panel search-result'></div> */}
                	</div>
                </div>	
			</div>

		);
	}
}

export default SearchResults;
