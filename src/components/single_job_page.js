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
        //     response: [{
		// 		"success": true,
		// 		"job": [{
		// 	"id": "401",
		// 	"title": "Software Engineer - Mid-Level",
		// 	"company_name": "Boeing",
		// 	"company_id": {
		// 		"name": "Boeing",
		// 		"logo": "https:\/\/logo.clearbit.com\/boeing.com",
		// 		"company_website": "boeing.com",
		// 		"linkedin_url": "https:\/\/www.linkedin.com\/company\/boeing",
		// 		"ocr_url": "https:\/\/www.ocregister.com\/?s=Boeing&orderby=date&order=desc",
		// 		"crunchbase_url": "https:\/\/www.crunchbase.com\/organization\/the-boeing-",
		// 	},
		// 	"post_date": "08\/17\/2018",
		// 	"listing_url": "https:\/\/us.jooble.org\/jdp\/1949726135485514564\/Software-Engineer-+-Mid+Level-Huntington-Beach%2c-CA?ckey=software&rgn=6974&pos=21&elckey=5453138214043691201&age=140&relb=100&brelb=100&bscr=438,97025&scr=438,97025",
		// 	"type_id": "1",
		// 	"description": "<div class=\"vacancy-desc_text_wrapper\">  \t\t\t\t\t<div class=\"desc_text_paragraph\">  <p simplifier=\"block\"><\/p>The Boeing Company is seeking a self-motivated Software Engineer to join the P-8A Acoustic team to work on a variety of exciting opportunities in acoustic modeling and simulation products used in anti-submarine warfare. This position will be part of a diverse team of engineers with various backgrounds and skill levels.<p><\/p><b>POSITION RESPONSIBILITIES:<br><\/b><br>• Assignments will include software test scripts, code development and integration of software components into a fully functional software system.<br>• This includes full life-cycle software development including requirements; designing, documenting, implementing and testing the software; formal qualification and certification of software; and supporting these products through delivery and deployment in the field.<br>• Develop, document and maintain architectures, requirements, algorithms, interfaces and designs for software systems.<p>Boeing is the world's largest aerospace company and leading manufacturer of commercial airplanes and defense, space and security systems. We are engineers and technicians. Skilled scientists and thinkers. Bold innovators and dreamers. Join us, and you can build something better for yourself, for our customers and for the world.<br><\/p><p><\/p><b>This position requires the ability to obtain a US Security Clearance, for which the US Government requires US Citizenship.<p><\/p>Basic Qualifications (Required Skills & Experience):<\/b><p><\/p>• Experience with tools used to verify Software (SW) fixes, integrate new and\/or modified functions and perform pre-release testing<br>• Experience utilizing software integration and test tools<br>• Experience with Agile methodologies and roles<br>• Troubleshooting experience<p><\/p><b>Preferred Qualifications (Desired Skills & Experience):<\/b><p><\/p>• Experience in Anti-Submarine Warfare (ASW) systems\/subsystem.<br>• Experience in desktop application frameworks, Distributed Interactive Simulation (DIS), Python, C++, JAVA, Linux, MATLAB and configuration management tools is preferred.<br>• Experience using DOORS (Dynamic Object Oriented Requirements System).<br>• Experience in SE Linux<br>• Experience with Docker and\/or Kubernetes with a microservices technology<br>• Experience documenting new and legacy software solutions including requirements and design documents and end-user guides<br>• Experience with Agile methodologies and roles<p><\/p><b>Typical Education\/Experience:<\/b> <p><\/p>Degree and typical experience in engineering classification: Bachelor's and 5 or more years' experience, Master's degree with 3 or more years' experience or PhD degree with experience. Bachelor, Master or Doctorate of Science degree from an accredited course of study, in engineering, computer science, mathematics, physics or chemistry. ABET is the preferred, although not required, accreditation standard.<p><b>This position is located in Huntington Beach, CA. Candidates must reside in the area or be willing to relocate at their own expense.<\/b><br><\/p>\t\t\t\t\t<\/div>  \t\t\t\t<\/div>",
		// 	"title_comp": "Software Engineer - Mid-Level-Boeing",
		// 	"location_id": {
		// 		"street": "5301 Bolsa Ave",
		// 		"city": "Huntington Beach",
		// 		"state": "CA",
		// 		"zip": "92647",
		// 		"lat": "33.7477922",
		// 		"lng": "-118.0374228",
		// 		"full_address": "5301 Bolsa Ave, Huntington Beach, CA 92647, USA"
		// 	},
		// }]
			// }]
        }

    }

    render(){
        const { lat, lng} = this.state.response[0].job[0].location_id;
        const {title, company_name, description, listing_url, company_id } = this.state.response[0].job[0];
        const {logo} = company_id;
        return (
            <div className="container modalBody">
                <div className='modalPosition'>
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
                </div>
            </div>
        )
    }
}

export default SingleJobPage;