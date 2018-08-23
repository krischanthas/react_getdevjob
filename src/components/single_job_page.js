import React,{Component} from 'react';
import GoogleMap from './google_map';
import './business_modal.css';
import TabsInfo from './bm_tabs';
import {Link} from 'react-router-dom';
import LandingPage from './landing_page.js';

class SingleJobPage extends Component {
    constructor(props){
        super(props);
        this.state = {
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
            }]
        }

    }

    render(){

        const {title, company_name, post_date, description } = this.state.response[0].job[0];
        return (
            <div className="container modalBody">
            <div className='modalPosition'>
                <div className="row">
                <div className='leftColumn col s6'>
                    <div className="row">
                        <Link to = '/' className='btn sp-btn-style col offset-s2 s2 green lighten-1 waves-light'>Home</Link>
                        <button className='btn sp-btn-style col offset-s1 s2 green lighten-1'>Apply!</button>
                    </div>
                    <div className='bm-companyName center'>
                        {company_name}
                    </div>
                    <div className='bm-jobTitle center'>
                        {title}
                    </div>
                    <TabsInfo />
              
                </div>
                <div className='rightColumn col s6'>
                   
                    <div className='row'>   
                        <div className ="bm-map">
                           <GoogleMap />
                        </div>
                        <div className='bm-jobDetails'>
                            <label>Job Description</label>
                            <p className ="bm-jobDescription"> {description}</p>
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