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
                    "ID": "442",
                    "title": "Learning Experience Designer",
                    "company_name": "Capital Group",
                    "company_id": "227",
                    "post_date": "08/06/2018",
                    "listing_url": "https://us.jooble.org/desc/3182813127317509367?ckey=javascript&rgn=6974&pos=21&elckey=-7156090584086508834&age=425&relb=100&brelb=100&bscr=49,596024&scr=49,596024",
                    "type_id": "1",
                    "description": "<div class=\"vacancy-desc_text_wrapper\">  \t\t\t\t\t<div class=\"desc_text_paragraph\">  <p><b> Req ID: </b>19802<br><b> Experience Level: </b> Professional <br><b> Other Location(s): </b> N/A   </p><p><b> Come grow with us </b></p><p></p> At Capital Group, how we work is defined by shared values that include absolute integrity, respect and collaboration. But it’s more than that. It’s smart and highly driven people united in purpose to serve our investors and one another. <p> Bring your energy and unique perspective to Capital and you’ll have the opportunity to grow with us professionally, personally, and financially. You’ll be part of a team that genuinely cares about helping you succeed. You’ll work alongside talented colleagues, many of whom build long careers while progressing through multiple roles, establishing lifelong friendships and making a difference in our communities. In return for your contributions, you’ll receive premier compensation and benefits, and a company-funded retirement plan that ranks among the most generous. <br> </p><p> Capital Group’s Human Resources organization drives the people dimension of our business strategy. We have over 200 Human Resources associates around the world and we work collectively to evolve our culture, strengthen our organization, engage our associates, and drive superior service. </p><p> As a Learning Experience Designer based in our Irvine, CA office you will be a key member of our Investment Operations/Information Technology Group Learning and Development Team. You will provide thought leadership and expertise to our Investment Operations (IO) and Information Technology (ITG) business groups on a broad range of learning and development initiatives including curriculum and technology. </p><p><b> Responsibilities: </b></p><p>•Consult with HR partners, senior leaders and business groups to diagnose and develop learning plans with comprehensive audience analysis, course outline, learning solution design and delivery method </p><p>•Develop innovative solutions to problems through training and an advanced use of technology </p><p>•Utilize creative writing, media (graphic, video) to communicate and engage learners </p><p>•Ensure a holistic approach to learning and developing training based on identified training and non-training interventions (e.g., instructor facilitated session, eLearning, and performance support tools)</p><p>•Identify and prioritize development needs and partner with subject matter experts to align deliverables with business needs </p><p>•Identify and define appropriate change management, communications, and training strategies </p><p>•Building long term, trusted relationships with our clients and colleagues, provide coaching and mentoring support throughout the project lifecycle </p><p>•Experience with L&D platforms including: Learning Portal, SuccessFactors LMS, eLearning development tools, and other technologies as needed </p><p>•Conduct research on industry best practices and maintain current knowledge on learning trends and technologies to ensure high quality deliverables and effective solutions </p><p><b> Qualifications: </b></p><p>•5+ years of instructional design experience </p><p>•Demonstrated in-depth knowledge of instructional design, adult learning practices and eLearning development tools </p><p>•Effective facilitation, diagnostic and consultative skills; proactively anticipates the needs of client groups </p><p>•Excellent written and verbal communication skills in order to effectively deliver important messages across a diverse group of associates and senior business leaders </p><p>•Excellent analytical/problem solving skills and demonstrated ability to influence others effectively </p><p>•Demonstrated ability to analyze complex data, identify trends and turn information into actionable business insights </p><p>•Proficiency and experience with design of SCORM / xAPI compliant courses </p><p>•Working knowledge of HTML, CSS, JavaScript, SQL </p><p>•Proficiency using tools such as Adobe Captivate, Articulate Storyline, Articulate Rise, Adobe Photoshop, Adobe Premiere, Adobe After Effects, and/or VideoScribe </p><p>•Strength in managing multiple priorities and stakeholders simultaneously </p><p>•Bachelor's degree required; Masters in Educational Technology or related is preferred </p><p> </p><p><b> Company Overview: </b><br> Founded in 1931, Capital Group is one of the world’s largest and most trusted investment management companies and home to the American Funds. We manage more than US$1.39 trillion in assets, and our 7,500 associates make our clients their first priority every day. When we do our job right, millions of investors around the world fulfill their dreams and financial goals, from home ownership and higher education, to a comfortable retirement. Our long-term investment results and outstanding service set us apart from our competitors, while our workplace sets us apart from other employers. </p><p><em> We are an equal opportunity employer, which means we comply with all federal, state and local laws that prohibit discrimination when making all decisions about employment. As equal opportunity employers, our policies prohibit unlawful discrimination on the basis of race, religion, color, national origin, ancestry, sex (including gender and gender identity), pregnancy, childbirth and related medical conditions, age, physical or mental disability, medical condition, genetic information, marital status, sexual orientation, citizenship status, AIDS/HIV status, political activities or affiliations, military or veteran status, status as a victim of domestic violence, assault or stalking or any other characteristic protected by federal, state or local law. </em></p>\t\t\t\t\t</div>  \t\t\t\t</div>",
                    "title_comp": "Learning Experience Designer-Capital Group",
                    "salary_id": "30",
                    "company": {
                        "ID": "227",
                        "name": "Capital Group",
                        "logo": "https://logo.clearbit.com/paparazziaccessories.com",
                        "company_website": "paparazziaccessories.com",
                        "linkedin_url": "https://www.linkedin.com/company/paparazzi-accessories-by-shediva",
                        "ocr_url": "https://www.ocregister.com/?s=Capital Group&orderby=date&order=desc",
                        "crunchbase_url": "https://www.crunchbase.com/organization/capital-green-group-development",
                        "location": {
                            "ID": "2",
                            "company_id": "227",
                            "street": "6455 Irvine Center Dr",
                            "city": "Irvine",
                            "state": "CA",
                            "zip": "92618",
                            "lat": "33.6725194",
                            "lng": "-117.766565",
                            "full_address": "6455 Irvine Center Dr, Irvine, CA 92618, USA"
                        },
                        "salary": {
                            "ID": "30",
                            "city_salary": "103222",
                            "state_salary": "109391",
                            "title_city": "Learning Experience Designer-Irvine"
                        }
                    }
                }]
			}]
        }

    }

    render(){
        const { lat, lng } = this.state.response[0].job[0].company.location;
        const {title, company_name, description, listing_url, company_id } = this.state.response[0].job[0];
        const {logo} = company_id;
        return (
            <div className="container modalBody">
                <div className='modalPosition'>
                    <div className="row">
                        <div className='bm-leftColumn col s4'>
                            <div className="row">
                                <Link to={LandingPage} className = "btn">Home</Link>
                                <a href={listing_url} target ="_blank" className='btn col offset-s1 s2 green lighten-1'>Apply</a>
                                
                            </div>
                            <div className='bm-companyName center'>
                                <img src={logo} />
                                <p> {company_name}</p>
                            </div>
                            <div className='bm-jobTitle center'>
                                {title}
                            </div>
                            <TabsInfo {...this.props}/>
              
                        </div>
                        <div className='bm-rightColumn col s8'>
                            <div className='row'>   
                                <div className ="bm-map">
                                    <GoogleMap lat={lat} lng={lng} {...this.props} />
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