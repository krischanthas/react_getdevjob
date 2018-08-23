import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './single_card.css';
import BusinessModal from './business_modal';

import {Modal, Input, Button} from 'react-materialize';

class Card extends Component{
    constructor(props){
        super(props);

        this.state = {
            isChecked: false,
            modalOpen: false
        }
    }

    toggleCheckboxChange(event){
        setState({
            isChecked: true
        })
    }

    handleModalOpen(){
        $(`#modal-${this.props.pullId}`).modal('open');

        this.setState({
            modalOpen: true
        });
    }

    render(){

        const {title, company_name, post_date, description } = this.props.details.job[0];
        let linkQuery = this.props.match.url + '/' + this.props.details.job[0].id;
        console.log('link', linkQuery)
        let lat = 33.650302 + parseInt(this.props.pullId);
        let lng = -117.755732 + parseInt(this.props.pullId);

        console.log('PULL ID:', this.props.pullId);
        console.log('PULL ID:', parseInt(this.props.pullId));

        console.log('LAT:', lat);
        console.log('LNG:', lng);
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
                    <button className="btn" onClick={() => this.handleModalOpen()} className='btn btn-style'>More Info</button>
                    <Modal id={`modal-${this.props.pullId}`} className="modalStyle">
                        <BusinessModal  lat={lat} lng={lng} isOpen={this.state.modalOpen} {...this.props}/>
                    </Modal>
                    <Link to = {linkQuery} target="_blank" className ='btn btn-style'>Share</Link>
                </div>
            </div>
        </div>

    </div>
        )

    }

}

export default Card;

    

