import React,{Component} from 'react';
import GoogleMap from './google_map';
import './single_job_page.css';
import TabsInfo from './bm_tabs';
import {Link} from 'react-router-dom';
import { formatPostData } from '../helpers';
import axios from 'axios';
import { connect } from 'react-redux';



class SingleJobPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            response:null,
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
        this.submitSingleJobData();
    }

    getSingleJobId(id, jobObject){
        jobObject.id = id;
    }

    async submitSingleJobData(event){
        console.log("What we are sending to get a single job    :",this.singleJobItem);
        const params = formatPostData(this.singleJobItem);
        
        const resp = await axios.post("http://localhost:8000/api/get_joblist.php", params);

        this.setState({
            response:resp.data.jobs[0]});
            // console.log("Single Page Response   :", this.state.response);
    }

    render(){
        console.log("Single Page Response   :", this.state.response);
        if(!this.state.response){
            return <h1> Loading </h1>;  // loading animation
        } else {
        let {company_name, description, listing_url, title } = this.state.response;
        const { company_website, linkedin_url, location, logo, ocr_url } = this.state.response.company;   
        const { full_address, lat, lng} = location;  
        if(description===''){
            description = "<h5>No Job Description Provided</h5>";
        }
       
        return (
            <div className="sp-Body">
                <div className='sp-Position'>
                    <div className="row">
                        <div className='sp-leftColumn'>
                            <div className="row sp-buttonRow">
                                <Link to='/' className="btn blue lighten-1">Home</Link> 
                                <a href={listing_url} target ="_blank" className='btn green lighten-1'>Apply</a>
                                
                            </div>
                            <div className='sp-companyName'>
                                <img src={logo} />
                                <p>{company_name}</p>
                            </div>
                            <div className='sp-jobTitle'>
                               {title}
                            </div>
                  

                        </div>
                        <div className='sp-rightColumn'>
                            <div className='row'>   
                                <div className ="sp-map">
                                  <p>GOOGLE MAP GOES HERE</p>
                                </div>
                                <div className='sp-jobDetails'>
                                    <label>Job Description</label>
                                    <p className ="sp-jobDescription" dangerouslySetInnerHTML={{__html:description}}></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    }
}

function mapStateToProps( state ){
	return{
		theme: state.theme.theme,
		}
}

export default connect(mapStateToProps,{})(SingleJobPage);