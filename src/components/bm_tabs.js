import React, {Component} from 'react';
import {Tabs, Tab} from 'react-materialize';
import './bm-tabs.css';


class TabsInfo extends Component{
constructor(props){
    super(props);

    this.state = {
        salary: 'active',
        details: '',
        learnMore:''
    }
}
  
render(){
    console.log('Yo this props homie' ,this.props.details.job[0]);
    const {post_date} = this.props.details.job[0];
    console.log(post_date);
    const{company_website, linkedin_url, ocr_url} = this.props.details.job[0].company_id;
    return(
            <Tabs className="z-depth-1 tabs-fixed-width">
                <Tab title="Salary" active>
                    <div className="section1">
                        <div className='col s12 bm-salary'>
                            <div className='center'>Average Salary in Orange County</div>
                            <div className='center'>$80,073</div>
                            <div className='center'>Average Salary in California</div>
                            <div className='center'> $88,488</div>
                        </div>
                    </div>
                </Tab>
                <Tab title="Details" >
                    <div className="section2">
                        <div className='col s12' id='Details'>
                            <ul className = "bm-details center">
                                <li>Full Time</li>
                                <li>{post_date}</li>
                                <li>Phone:</li>
                                <li>(555)555-5555</li>
                            </ul>
                        </div>
                    </div>
                </Tab>
                <Tab title="More">
                    <div className="setion3">
                        <div id='Learn More' className ='col s12'>
                            <div className='row'>
                                <p className='center'>Find out more details about the company</p>
                                <a href = {ocr_url}  target ="_blank" className='btn col offset-s4 s4 blue' >Research Business</a>
                            </div>
                            <div className='row'>
                                <p className='center'>Do you know anyone working here?</p>
                                <a href = {linkedin_url} target= '_blank'className='btn col offset-s4 s4 blue' >LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
    )
}
}


export default TabsInfo;