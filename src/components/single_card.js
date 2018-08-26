import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './single_card.css';
import BusinessModal from './business_modal';
import {Modal, Input} from 'react-materialize';

class Card extends Component{
    constructor(props){
        super(props);

        this.state = {
            isChecked: false,
            modalOpen: false
        }
    }

    toggleCheckboxChange(){
        this.setState({
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
        console.log('check it out' , this.props);
        const {title, company_name, post_date } = this.props.details;
        let {description} = this.props.details;
        if(description===''){
            description = "<h5>No Job Description Provided</h5>";
        }
        let linkQuery = this.props.match.url + '/' + this.props.details.ID;
        let lat = parseFloat(this.props.details.company.location.lat);
        let lng = parseFloat(this.props.details.company.location.lng);
        return (
    <div>   
        <div className='sc-cardContainer card-panel'>
            <div className = 'sc-leftColumn'>
                <div className ='BusinessInfo'>
                    <ul className='sc-jobDetailsList'>
                        <li>{title}</li>
                        <li>{company_name}</li>
                    </ul>
                </div>
                <div className='sc-jobDescription'>
                        <p dangerouslySetInnerHTML={{__html:description}}></p>     
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
                    <button className="btn" onClick={() => this.handleModalOpen()} className='btn btn-style'>More</button>
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

    

