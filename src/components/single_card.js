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
        const {title, company_name } = this.props.details;
        let {description, post_date} = this.props.details;
        if(description===''){
            description = "<br><br><br><br><br><br><h3>No Job Description Provided</h3>";
        }
        let seperatedPostDate = post_date.split('/');
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        let post_mm = parseInt(seperatedPostDate[0]);
        let post_dd = parseInt(seperatedPostDate[1]);
        let post_yyyy = parseInt(seperatedPostDate[2]);
        let withinAWeek = false;
        if( mm - post_mm === 1 && dd <6 && post_dd >=25 ){
            withinAWeek = true
        }else if(post_mm === mm && (dd-post_dd) <= 7){
            withinAWeek = true
        }
        let linkQuery = this.props.match.url + '/' + this.props.details.ID;
        let lat = parseFloat(this.props.details.company.location.lat);
        let lng = parseFloat(this.props.details.company.location.lng);
        return (
    <div>   
        <div className='sc-cardContainer card-panel'>
            <div className={`datePosted ${withinAWeek?'green-text':'black-text'} `}>
                    Date Posted: {post_date};
                </div>
            <div className = 'sc-leftColumn'>
                <div className ='sc-businessInfo'>
                    <ul className='sc-jobDetailsList'>
                        <li><strong>{title}</strong></li>
                        <li><strong>{company_name}</strong></li>
                    </ul>
                </div>
                <div className='sc-jobDescription'>
                        <p dangerouslySetInnerHTML={{__html:description}}></p>     
                </div>    
            </div>
            <div className="sc-rightColumn">
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

    

