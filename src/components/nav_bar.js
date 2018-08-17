import React, { Component } from 'react';

class NavBar extends Component {
	render() {
		return (
			<div className='top-nav'>
				<ul>
                    <li>Filters</li>
                    <li>Title/Location</li>
                    <li> 4 out of 100 Jobs Found</li>
                    <li>Saved</li>
                </ul>
			</div>
		);
	}
}

export default NavBar;
