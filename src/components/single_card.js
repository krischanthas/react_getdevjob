import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './single_card.css';
import BusinessModal from './business_modal';

import {Modal, Input, Button} from 'react-materialize';

class Card extends Component{
    constructor(props){
        super(props);

        this.state = {
        isChecked: false
        }

    }

    toggleCheckboxChange(event){
        setState({
            isChecked: true
        })
    }

    render(){

        const {title, company_name, post_date, description } = this.props.details.job[0];
        let linkQuery = this.props.match.url + '/' + this.props.details.job[0].id;
        console.log('link', linkQuery)

        return (
    <div>   
        <div className='sc-cardContainer card-panel'>
            <div className = 'sc-leftColumn'>
                <div className ='BusinessInfo'>
                    <ul className='sc-jobDetailsList'>
                        <li>{title}</li>
                        <li>{company_name}</li>
                        <li>Irvine, CA 92618</li>
                        <li>60-80K Salary</li>
                    </ul>
                </div>
                <div className='sc-jobDescription'>
                        <p>{description}</p>       
                </div>
                <div className='datePosted'>
                    Date Posted: {post_date};
                </div>
            </div>
            <div className="sc-rightColumn">
                <div className='appliedStatus'>
                    <Input className = 'appliedStatus' name='group1' type='checkbox' value='Applied' label='Applied' />                                   
                </div>
                <div className='buttonArea'> 
                    <button className='btn btn-style indigo'>Save</button>
                    <Modal className="modalStyle" trigger={<Button className='btn btn-style'>More Info</Button>}>
                        <BusinessModal {...this.props}/>
                    </Modal>
                    <button className ='btn btn-style'>Share</button>
                </div>
            </div>
        </div>

    </div>
        )

    }

}

export default Card;

    

