import React,{Component} from 'react';
import GoogleMap from './google_map';
import './business_modal.css';
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
            <div className="container modalBody">
                {/* <div className='modalPosition'>
                    <div className="row">
                        <div className='bm-leftColumn col s4'>
                            <div className="row">
                                
                                <a href={listing_url} target ="_blank" className='btn col offset-s1 s2 green lighten-1'>Apply</a>
                                
                            </div>
                            <div className='bm-companyName center'>
                                <img src={logo} />
                                <p> {company_name}</p>
                            </div>
                            <div className='bm-jobTitle center'>
                                {title}
                            </div>
                            <TabsInfo />
              
                        </div>
                        <div className='bm-rightColumn col s8'>
                            <div className='row'>   
                                <div className ="bm-map">
                                    <GoogleMap lat={lat} lng={lng} id={company_id} isOpen={isOpen} />
                                </div>
                                <div className='bm-jobDetails'>
                                    <label>Job Description</label>
                                    <p className ="bm-jobDescription" dangerouslySetInnerHTML={{__html:description}}></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default SingleJobPage;