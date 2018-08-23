import React, { Component } from 'react';
import './filters.css';
import {Row, Input} from 'react-materialize';


class Filters extends Component {
    
    render(){
        const minSalary = "All Available";
        return (
            <div>
                <div className ="sidebar">
                    <Row>
                        <Input s={6} type ='select' label = 'Min Salary' defaultValue = {minSalary}>
                            <option value = '1'> $0</option>
                            <option value = '2'> $30K</option>
                            <option value = '3'> $50K+</option>
                        </Input>
                        <Input s={6} type ='select' label = 'Max Salary' defaultValue = {minSalary}>
                            <option value = '1'> $30K</option>
                            <option value = '2'> $50K</option>
                            <option value = '3'> $70K+</option>
                        </Input>
                    </Row>
                    <Row>
                        <Input s={12} type ='select' label = 'Distance' defaultValue ='Nearby'>
                            <option value = '1'>5 miles</option>
                            <option value = '2'>15 miles</option>
                            <option value = '3'>15+ miles</option>
                        </Input>
                    </Row>
                    <Row>
                        <Input s={12} type ='select' label = 'Experience' defaultValue ='All Available'>
                            <option value = '1'>0-2 years</option>
                            <option value = '2'>2-5 years</option>
                            <option value = '3'>5+ years</option>
                        </Input>
                    </Row>
                    <Row>
                        <Input s={12} type ='select' label = 'Posted Within' defaultValue ='All'>
                            <option value = '1'>7 days</option>
                            <option value = '2'>14 days</option>
                            <option value = '3'>30 days</option>
                        </Input>
                    </Row>
                    <Row>
                        <Input name='employmentType' type='checkbox' value = 'contract' label='Contract' />
                        <Input name='employmentType' type='checkbox' value = 'internship' label='Internship' />
                        <Input name='employmentType' type='checkbox' value = 'partTime' label='Part-Time' />
                        <Input name='employmentType' type='checkbox' value = 'fullTime' label='Full Time' />
                    </Row>
                </div>
            </div>
        )
    }
}

export default Filters;