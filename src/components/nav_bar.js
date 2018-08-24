import React, { Component } from 'react';
import Filters from './filters';
import { Navbar, NavItem, Dropdown, Button} from 'react-materialize';
import { FaSortDown } from 'react-icons/fa';
import {Link} from 'react-router-dom';


class NavBar extends Component {

	render() {
		return (
			<Navbar className = 'black' fixed = {true} brand = '<GDJ/>' right>
				<NavItem>Saved</NavItem>
			</Navbar>
		);
	}
}

export default NavBar;



