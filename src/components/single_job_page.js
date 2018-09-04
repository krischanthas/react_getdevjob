import React,{Component} from 'react';
import GoogleMap from './google_map';
import './single_job_page.css';
import TabsInfo from './bm_tabs';
import {Link} from 'react-router-dom';
import LandingPage from './landing_page.js';
import { formatPostData } from '../helpers';
import axios from 'axios';

class SingleJobPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            response:[],
        }

        this.singleJobItem = {
            title:'',
            location:'',
            id:'',
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
    }
    
    componentDidMount(){
        this.getSingleJobId(this.props.match.params.job_id, this.singleJobItem);
        this.getJobTitle(this.props.match.params.job, this.singleJobItem);
        this.getCity(this.props.match.params.city, this.singleJobItem);
        this.submitSingleJobData();
    }

    getSingleJobId(id, jobObject){
        jobObject.id = id;
    }

    getJobTitle( title, jobObject ){
        jobObject.title = title;
    }

    getCity( city, jobObject ){
        jobObject.city = city;
    }

    async submitSingleJobData(event){
        console.log("What we are sending to get a single job    :",this.singleJobItem);
        const params = formatPostData(this.singleJobItem);
        
        const resp = await axios.post("http://localhost:8000/api/get_joblist.php", params);

        this.setState({
            response:resp});
        console.log("what we are recieving from single job call", resp);
        
    }



    render(){
        // console.log("SINGLE PAGE PROPS", this.state);
        // const { lat, lng} = this.state.response[0].job[0].location_id;
        // const {title, company_name, description, listing_url, company_id } = this.state.response[0].job[0];
        // const {logo} = company_id;
        return (
            <div className="sp-Body">
                <div className='sp-Position'>
                    <div className="row">
                        <div className='sp-leftColumn'>
                            <div className="row sp-buttonRow">
                                <Link to='/' className="btn blue lighten-1">Home</Link> 
                                <a target ="_blank" className='btn green lighten-1'>Apply</a>
                                
                            </div>
                            <div className='sp-companyName'>
                                <img  />
                                <p> company name</p>
                            </div>
                            <div className='sp-jobTitle'>
                               job title
                            </div>
                            <p className = "sp-tabs"> TABS GO HERE </p>
              
                        </div>
                        <div className='sp-rightColumn'>
                            <div className='row'>   
                                <div className ="sp-map">
                                  <p>GOOGLE MAP GOES HERE</p>
                                </div>
                                <div className='sp-jobDetails'>
                                    <label>Job Description</label>
                                    <p className ="sp-jobDescription"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleJobPage;