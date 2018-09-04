import React, {Component} from 'react';
import {Tabs, Tab} from 'react-materialize';
import './bm-tabs.css';
import SalaryPercentage from './salary_percentage_difference';
import {Link} from 'react-router-dom';

class TabsInfo extends Component{
    constructor(props){
        super(props);

        this.state = {
            salary: 'active',
            details: '',
            learnMore:''
        }
    }

    displaySalaryInDollars(salary){
        let afterComma, firstThreeDigits, combinedArrays;
        let salaryArray = salary.split('');
        afterComma = salaryArray.slice(0,salaryArray.length-3);
        firstThreeDigits = salaryArray.slice(salaryArray.length-4,salaryArray.length-1);
        firstThreeDigits.unshift(",");
        combinedArrays = afterComma.concat(firstThreeDigits);
        let salaryInDollars ='$' + combinedArrays.join('');
        return salaryInDollars;
    }

    validateCompanySite(){
        let { company_website } = this.props.details.company;
        if(company_website !== ''){
            return (
                <div className='row'>
                    <p className='center'>Learn about the company through their website</p>
                    <a href = {company_website}  target ="_blank" className='btn col offset-s4 s4 blue' >Company</a>
                </div>
            )
        } else {
            return(
                <div className='row'>
                    <p className='center'>Company website unavailable at this time</p>
                    <a className='btn col offset-s4 s4 blue disabled' >Company</a>
                </div>
            )
        }
    }
    validateLinkedIn(){
        let { linkedin_url } = this.props.details.company;
        if(linkedin_url !== ''){
            return (
                <div className='row'>
                    <p className='center'>Do you know anyone working here?</p>
                    <a href = {linkedin_url} target= '_blank' className='btn col offset-s4 s4 blue' >LinkedIn</a>
                </div>
            )
        } else{
            linkedin_url = null;
            return (
                <div className='row'>
                    <p className='center'>LinkedIn info unavailable at this time</p>
                    <a className='btn col offset-s4 s4 blue disabled' >LinkedIn</a>
                </div>
            )
        }
    }
    render(){

        const {ocr_url, location} = this.props.details.company;
        const {street,city, state, zip} = location;
        let {city_salary, state_salary} = this.props.details.salary;
        city_salary = this.displaySalaryInDollars(city_salary);
        state_salary = this.displaySalaryInDollars(state_salary);
    return(
            <Tabs className="z-depth-1 tabs-fixed-width tabsBar">
                <Tab title="salary" active>
                    <div className="section1">
                        <div className='col s12 bm-salary'>
                            <div className='center'>avgSalary({city})</div>
                            <div className='center'>{city_salary}</div>
                                <SalaryPercentage {...this.props}/>  
                            <div className='center'>avgSalary(California)</div>
                            <div className='center'> {state_salary}</div>
                        </div>
                    </div>
                </Tab>
                <Tab title="commute" >
                    <div className="section2">
                        <div className='col s12' id='Details'>
                            <ul className = "bm-details center">
                                <li>companyAddress()</li>
                                <li>{street} {city} {state} {zip}</li>
                                <li>estDriveTime()</li>
                                <li>{this.props.duration}</li>
                                <li>distanceFromMe()</li>
                                <li>{this.props.distance}</li>

                            </ul>
                        </div>
                    </div>
                </Tab>
                <Tab title="company">
                    <div className="setion3">
                        <div id='Learn More' className ='col s12 bm-more'>
                            {this.validateCompanySite()}
                            {this.validateLinkedIn()}
                            <div className='row'>
                                <p className='center'>Any new or relavent business articles?</p>
                                <a href = {ocr_url} target= '_blank' className='btn col offset-s4 s4 blue' >Check OCR</a>
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
    )
    }
}


export default TabsInfo;