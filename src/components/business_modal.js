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
        const {title, company_name, description, listing_url, company_id } = details.job[0];
        const {logo} =company_id;
        return (
            <div className="container modalBody">
            <div className='modalPosition'>
                <div className="row">
                <div className='bm-leftColumn col s6'>
                    <div className="row">
                        <button className='btn col offset-s2 s2 green lighten-1 waves-light'>Save</button>
                        <a href={listing_url} target ="_blank" className='btn col offset-s1 s2 green lighten-1'>Apply</a>
                        <button className='btn col offset-s1 s2'>Share</button>
                    </div>
                    <div className='bm-companyName center'>
                        <img src={logo} />
                        <p> {company_name}</p>
                    </div>
                    <div className='bm-jobTitle center'>
                        {title}
                    </div>
                    <TabsInfo {...this.props}/>
              
                </div>
                <div className='bm-rightColumn col s6'>
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