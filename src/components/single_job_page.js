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
            distance:null,
            duration:null,
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

    getDrivingData = (distance,duration) =>{
        this.setState(
            {
                distance:distance,
                duration:duration,
            })
    }


    getSingleJobId(id, jobObject){
        jobObject.id = id;
    }

    async submitSingleJobData(event){
        const params = formatPostData(this.singleJobItem);
        
        const resp = await axios.post("http://localhost:8000/api/get_joblist.php", params);

        this.setState({
            response:resp.data.jobs[0]});
    }

    render(){
        if(!this.state.response){
            return <h1> Loading </h1>;  // loading animation
        } else {
        let {company_name, description, listing_url, title } = this.state.response;
        const { logo } = this.state.response.company;   
        
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
                            <TabsInfo details = {this.state.response} distance ={this.state.distance} duration = {this.state.duration} />
                        </div>
                        <div className='sp-rightColumn'>
                            <div className='row'>   
                                <div className ="sp-map">
                                  <GoogleMap lat={parseFloat(this.state.response.company.location.lat)} lng={parseFloat(this.state.response.company.location.lng)} isOpen={true} drivingInfo={this.getDrivingData} />
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