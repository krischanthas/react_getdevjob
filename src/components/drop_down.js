import React, {Component} from 'react';
import {Row, Input} from 'react-materialize';

class Dropdown extends Component {

    render(){
        <Row>
            <Input s={6} type ='select' label = 'Salary' defaultValue ='Min Salary'>
            <option value = '1'> $30,000 - $50,000</option>
            <option value = '2'> $50,000 - $70,000</option>
            <option value = '3'> $70,000+</option>
            </Input>
        </Row>
    }
}