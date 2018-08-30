import React, { Component } from 'react';
import { Navbar, NavItem} from 'react-materialize';
import SetTheme from './SetTheme';
import { connect } from 'react-redux';


const NavBar = props => {

		return (
			<Navbar className = {props.navColor + ' ' + props.textColor} fixed = {true} brand = '<GDJ/>' right>
				<NavItem>Saved</NavItem>
				<SetTheme />
			</Navbar>
		);
}


function mapStateToProps( state ){
	return {
		navColor: state.theme.theme.nav,
		textColor: state.theme.theme.text
	}
}

export default connect(mapStateToProps, {})(NavBar);



