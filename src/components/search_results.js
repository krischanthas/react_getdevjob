import React, { Component } from 'react';
import './search_results.css';
import NavBar from './nav_bar';
import Card from './single_card';
import Filters from './filters';
import { Button, SideNav,SideNavItem } from 'react-materialize';
import {FaEllipsisV} from 'react-icons/fa';
import {formatPostData} from "../helpers";
import axios from 'axios';

class SearchResults extends Component {
	constructor(props){
		super(props);

		this.state = {
			left: '',
			right: '',
			response: [] 
		}
	}

	async componentDidMount(){
		await this.getJobData();
		console.log(this.state.response.data.job);
	    this.populateCards(this.state.response.data.jobs);
	}

	getFilterResponseData(respObj){
		this.setState({
			response: respObj
		})
	}
	
	async getJobData(){
        event.preventDefault();
		const initialSearchParams = {
            title:'Web Developer',
            location:'Irvine',
            minSalary:'',
            maxSalary:'',
            distance:'',
            experience:'',
            postedDate:'',
            employmentTypeContract: false,
            employmentTypeInternship: false,
            employmentTypePartTime: false,
            employmentTypeFullTime: false,
            userLat:'',
            userLng:'',
        }
        const params = formatPostData(initialSearchParams);
		try{
			const resp = await axios.post("http://localhost:8000/api/get_joblist.php", params); 
			console.log('WitNESS ME', resp);
			this.setState({
				response:resp
			})
			}catch(err){
				console.log('Failed to connect, Error: ', err);
			}    
    }

	populateCards(array){
		let alt = 0;
		let leftArray =[];
		let rightArray =[];
		for (var index=0; index < array.length; index++){
			if(alt){
				let temp = <Card key = {index} pullId = {index} details = {this.state.response.data.jobs[index]}{...this.props} />
				leftArray.push(temp);
				alt = 1-alt;
			} else {
				let temp = <Card key = {index} pullId = {index} details = {this.state.response.data.jobs[index]}{...this.props} />
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
		return (
			<div className = 'main-cont'>
				<NavBar/>
					<SideNav
				  	trigger = {<Button className ="black sideTrigger"><FaEllipsisV/>Filters</Button>}
				  	options={{closeOnClick:false}}
					>
						<SideNavItem>
							<Filters getFilterData = {this.getFilterResponseData.bind(this)}/>
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




