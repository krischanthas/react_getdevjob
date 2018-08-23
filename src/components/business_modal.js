import React,{Component} from 'react';
import GoogleMap from './google_map';
import './business_modal.css';
import TabsInfo from './bm_tabs';

class BusinessModal extends Component {
    constructor(props){
        super(props);


    }

    render(){
        console.log('MODAL PROPS:', this.props);

        const { lat, lng, pullId, details, isOpen } = this.props;

        const {title, company_name, post_date, description } = details.job[0];
        return (
            <div className="container modalBody">
            <div className='modalPosition'>
                <div className="row">
                <div className='leftColumn col s6'>
                    <div className="row">
                        <button className='btn col offset-s2 s2 green lighten-1 waves-light'>Save</button>
                        <button className='btn col offset-s1 s2 green lighten-1'>Apply</button>
                        <button className='btn col offset-s1 s2'>Share</button>
                    </div>
                    <div className='bm-companyName center'>
                        {company_name}
                    </div>
                    <div className='bm-jobTitle center'>
                        {title}
                    </div>
                    <TabsInfo />
              
                </div>
                <div className='rightColumn col s6'>
                    <div className='row'>   
                        <div className ="bm-map">
                           <GoogleMap lat={lat} lng={lng} id={pullId} isOpen={isOpen} />
                        </div>
                        <div className='bm-jobDetails'>
                            <label>Job Description</label>
                            <p className ="bm-jobDescription" dangerouslySetInnerHTML={{__html:description}}>
                                   </p>
                        </div>
                    </div>
                </div>
                
            </div>
    
        </div>
        </div>
        )
    }
}

export default BusinessModal;