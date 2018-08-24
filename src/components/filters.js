import React, { Component } from 'react';
import './filters.css';
import {Row, Input} from 'react-materialize';


class Filters extends Component {
    constructor(props){
        super(props);

        this.state = {
            minSalary:'',
            maxSalary:'',
            distance:'',
            experience:'',
            postedDate:'',
            employmentTypeContract: false,
            employmentTypeInternship: false,
            employmentTypePartTime: false,
            employmentTypeFullTime: false,
        }
    }
    
    handleChange(event){
        debugger;

        const {name, value} = event.currentTarget;

        this.setState({
            [name]:value
        })
       

    }
    handleCheckBox(event){
        debugger;
        console.log("Event:" , event);

        const {name, checked} = event.currentTarget;
        if(checked !== false){
            this.setState({
            [name]:true
        })
        }else{
            this.setState({
                [name]:false
            })
        }

    }



    render(){
        const minSalary = "All Available";
        return (
            <div>
                <div className ="sidebar">
                    <Row>
                        <Input s={6} type ='select' label = 'Min Salary' name="minSalary" defaultValue = {minSalary} onChange={this.handleChange.bind(this)}>
                            <option value = '1'> $0</option>
                            <option value = '2'> $30K</option>
                            <option value = '3'> $50K+</option>
                        </Input>
                        <Input s={6} type ='select' label = 'Max Salary' name='maxSalary'  defaultValue = {minSalary} onChange={this.handleChange.bind(this)} >
                            <option value = '1'> $30K</option>
                            <option value = '2'> $50K</option>
                            <option value = '3'> $70K+</option>
                        </Input>
                    </Row>
                    <Row>
                        <Input s={12} type ='select' label = 'Distance' name='distance' defaultValue ='Nearby' onChange={this.handleChange.bind(this)}>
                            <option value = '1'>5 miles</option>
                            <option value = '2'>15 miles</option>
                            <option value = '3'>15+ miles</option>
                        </Input>
                    </Row>
                    <Row>
                        <Input s={12} type ='select' label = 'Experience' name='experience' defaultValue ='All Available' onChange={this.handleChange.bind(this)}>
                            <option value = '1'>0-2 years</option>
                            <option value = '2'>2-5 years</option>
                            <option value = '3'>5+ years</option>
                        </Input>
                    </Row>
                    <Row>
                        <Input s={12} type ='select' label = 'Posted Within' name='postedDate' defaultValue ='All' onChange={this.handleChange.bind(this)}>
                            <option value = '1'>7 days</option>
                            <option value = '2'>14 days</option>
                            <option value = '3'>30 days</option>
                        </Input>
                    </Row>
                    <Row>
                        <Input name='employmentTypeContract' type='checkbox' checked={this.state.employmentTypeContract} value = 'contract' label='Contract'  onChange={this.handleCheckBox.bind(this)} />
                        <Input name='employmentTypeInternship' type='checkbox' checked={this.state.employmentTypeInternship} value = 'internship' label='Internship'  onChange={this.handleCheckBox.bind(this)} />
                        <Input name='employmentTypePartTime' type='checkbox' checked={this.state.employmentTypePartTime} value = 'partTime' label='Part-Time'  onChange={this.handleCheckBox.bind(this)}/>
                        <Input name='employmentTypeFullTime' type='checkbox' checked={this.state.employmentTypeFullTime} value = 'fullTime' label='Full Time'  onChange={this.handleCheckBox.bind(this)}/>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Filters;