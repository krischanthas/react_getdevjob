import React, { Component } from 'react';
import './search_results.css';
import NavBar from './nav_bar';
import Card from './single_card';
import Filters from './filters';
import { Button, SideNav,SideNavItem } from 'react-materialize';


class SearchResults extends Component {
	constructor(props){
		super(props);

		this.state = {
			left: '',
			right: '',
			response: [{
				"success": true,
				"job": [{
					"id": "255",
					"title": "Software Engineer",
					"company_name": "CyberCoders",
					"company_id": "1",
					"post_date": "2018-08-08 00:00:00",
					"listing_url": "https:\/\/us.jooble.org\/desc\/3786682248323373670?ckey=software&rgn=6974&pos=1&elckey=-8730678432586643581&age=304&relb=100&brelb=100&bscr=485,23587&scr=485,23587",
					"type_id": "1",
					"description": " \t\t\t\t\t If you are a Software Engineer with experience, please read on! Top Reasons to Work with Us We are a global cloud base logistic company. Looking to as to our engineer team on working with our current platform and adding new features. What You Need for this Position At Least 3 Years of experience and knowledge of: - Python - Django - Postgres - Nginx So, if you are a Software Engineer with experience, please apply today! Applicants must be authorized to work in the U.S. Preferred Skills Python Django Postgres Nginx \t\t\t\t\t \t\t\t\t"
				}]
			}, {
				"success": true,
				"job": [{
					"id": "215",
					"title": "Web Developer",
					"company_name": "Blizzard Super Long",
					"company_id": "1",
					"post_date": "2018-08-08 00:00:00",
					"listing_url": "https:\/\/us.jooble.org\/desc\/3786682248323373670?ckey=software&rgn=6974&pos=1&elckey=-8730678432586643581&age=304&relb=100&brelb=100&bscr=485,23587&scr=485,23587",
					"type_id": "1",
					"description": " \t\t\t\t\t If you are a Software Engineer with experience, please read on! Top Reasons to Work with Us We are a global cloud base logistic company. Looking to as to our engineer team on working with our current platform and adding new features. What You Need for this Position At Least 3 Years of experience and knowledge of: - Python - Django - Postgres - Nginx So, if you are a Software Engineer with experience, please apply today! Applicants must be authorized to work in the U.S. Preferred Skills Python Django Postgres Nginx \t\t\t\t\t \t\t\t\t"
				}]
			}, {
				"success": true,
				"job": [{
					"id": "253",
					"title": "Nintendo",
					"company_name": "CyberCoders",
					"company_id": "1",
					"post_date": "2018-08-08 00:00:00",
					"listing_url": "https:\/\/us.jooble.org\/desc\/3786682248323373670?ckey=software&rgn=6974&pos=1&elckey=-8730678432586643581&age=304&relb=100&brelb=100&bscr=485,23587&scr=485,23587",
					"type_id": "1",
					"description": " \t\t\t\t\t If you are a Software Engineer with experience, please read on! Top Reasons to Work with Us We are a global cloud base logistic company. Looking to as to our engineer team on working with our current platform and adding new features. What You Need for this Position At Least 3 Years of experience and knowledge of: - Python - Django - Postgres - Nginx So, if you are a Software Engineer with experience, please apply today! Applicants must be authorized to work in the U.S. Preferred Skills Python Django Postgres Nginx \t\t\t\t\t \t\t\t\t"
				}]
			}, {
				"success": true,
				"job": [{
					"id": "211",
					"title": "SEGA",
					"company_name": "CyberCoders",
					"company_id": "1",
					"post_date": "2018-08-08 00:00:00",
					"listing_url": "https:\/\/us.jooble.org\/desc\/3786682248323373670?ckey=software&rgn=6974&pos=1&elckey=-8730678432586643581&age=304&relb=100&brelb=100&bscr=485,23587&scr=485,23587",
					"type_id": "1",
					"description": " \t\t\t\t\t If you are a Software Engineer with experience, please read on! Top Reasons to Work with Us We are a global cloud base logistic company. Looking to as to our engineer team on working with our current platform and adding new features. What You Need for this Position At Least 3 Years of experience and knowledge of: - Python - Django - Postgres - Nginx So, if you are a Software Engineer with experience, please apply today! Applicants must be authorized to work in the U.S. Preferred Skills Python Django Postgres Nginx \t\t\t\t\t \t\t\t\t"
				}]
			}
		] 
		}
	}

	componentDidMount(){
		this.populateCards(this.state.response);
	}
	populateCards(array){
		let alt = 0;
		let leftArray =[];
		let rightArray =[];
		for (var index=0; index < array.length; index++){
			if(alt){
				let temp = <Card key = {index} pullId = {index} details = {this.state.response[index]}{...this.props} />
				leftArray.push(temp);
				alt = 1-alt;
			} else {
				let temp = <Card key = {index} pullId = {index} details = {this.state.response[index]}{...this.props} />
				rightArray.push(temp);
				alt = 1-alt;
			}
		}
		this.setState({
				left:leftArray,
				right: rightArray
		})
	}

	render() {
		console.log('Props:', this.props);
		return (
			<div className = 'main-cont'>
				<NavBar/>
				<SideNav
						  trigger = {<Button className = "sideTrigger">Filters</Button>}
						  options={{closeOnClick:false}}
					  >
						<SideNavItem>
							<Filters />
						</SideNavItem>
					</SideNav>
				<div className = 'cardArea'>
                   	<div className='leftColumn'>
	                    {this.state.left}
	                </div>    
                	<div className='rightColumn'>
						{this.state.right}
                	</div>
                </div>	
			</div>
		);
	}
}

export default SearchResults;
