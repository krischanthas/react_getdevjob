import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Input, Col} from 'react-materialize';
import './nav_bar.css';


class NavBar extends Component {
	constructor(props){
		super(props)

		this.state = {
			theme: '',
			dropStyle: 'nb-drop-content'
		}
	}
	handleInputChange(event){
		event.preventDefault();
		const {value} = event.target;
		this.setState({
			theme: value,
		});
		this.dropMenu();
	}
	dropMenu(){
		if(this.state.dropStyle === 'nb-drop-content' || this.state.dropStyle === 'hidden nb-drop-content'){
			this.setState({
			dropStyle: 'shown nb-drop-content'
			})
		} else {
			this.setState({
			dropStyle: 'hidden nb-drop-content'
		})
		}
		
	}
	render() {
		return (
			<nav className = 'top-nav black'>
				<div className = 'nav-wrapper'>
					<Link to = '/' className = 'brand-logo tn-logo'>&lt;gDJ/&gt;</Link>
					<ul className = 'right nav-bar-items'>
						<li onClick = {this.dropMenu.bind(this)} className = 'tn-theme row btn black white-text'>
							Change Theme	
						</li>
						<div className = {this.state.dropStyle}>
							<Input s={12} type ='select' label = 'Job Title' name="title" defaultValue = 'Web Developer' onChange={this.handleInputChange.bind(this)}>
	                            <option value = 'Dark Theme'> Dark Theme</option>
	                            <option value = 'White as John'> White as John Theme</option>
	                            <option value = 'Poop Brown'> Poop Brown Theme</option>
	                        </Input>
                        </div>
					</ul>	
				</div>
			</nav>
		);
	}
}

export default NavBar;

//<div className = 'col s6 m4 l11 offset-s1 offset-m2 offset-l1 nav-theme'>
								
//</div>	



