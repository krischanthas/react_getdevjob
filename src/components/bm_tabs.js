import React, {Component} from 'react';
import {Tabs, Tab} from 'react-materialize';
import './bm-tabs.css';
import SalaryPercentage from './salary_percentage_difference';


function findThePercentageDifference(cityAvg , stateAvg){
    let difference = stateAvg - cityAvg;
    let payStatus=null;
    let percentageDifference = (difference / percentageDifference).toFixed(2);
    if(percentageDifference > 0){
        payStatus = "higher";
    } else {
        payStatus = "lower"
    }
    return `This salary is ${percentageDifference} ${payStatus} than the state average.`
}

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
    const {location_id} = this.props.details.job[0];
    const{ linkedin_url, ocr_url, crunchbase_url} = this.props.details.job[0].company_id;
    const {street,city, state, zip} = location_id;

    console.log("Look at me",this.props);
    
    return(
            <Tabs className="z-depth-1 tabs-fixed-width">
                <Tab title="Salary" active>
                    <div className="section1">
                        <div className='col s12 bm-salary'>
                            <div className='center'>Average Salary in Orange County</div>
                            <div className='center'>$80,073</div>
                                <SalaryPercentage />  
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
                                <li>{street} {city} {state} {zip}</li>
                                <li>Phone:</li>
                                <li>(555)555-5555</li>
                            </ul>
                        </div>
                    </div>
                </Tab>
                <Tab title="More">
                    <div className="setion3">
                        <div id='Learn More' className ='col s12 bm-more'>
                            <div className='row'>
                                <p className='center'>Find out more details about the company</p>
                                <a href = {crunchbase_url}  target ="_blank" className='btn col offset-s4 s4 blue' >Research Business</a>
                            </div>
                            <div className='row'>
                                <p className='center'>Do you know anyone working here?</p>
                                <a href = {linkedin_url} target= '_blank'className='btn col offset-s4 s4 blue' >LinkedIn</a>
                            </div>
                            <div className='row'>
                                <p className='center'>Any new or relavent business articles?</p>
                                <a href = {ocr_url} target= '_blank'className='btn col offset-s4 s4 blue' >Check OCR</a>
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
    )
}
}


export default TabsInfo;