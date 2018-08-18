import React,{Component} from 'react';
import GoogleMap from './google_map';
import './business_modal.css';

class BusinessModal extends Component {
    render(){
        return (
            <div className="container modalBody">
            <div className='modalPosition card-panel'>
                <div className="row">
                <div className='leftColumn col s6'>
                    <div className="row">
                        <button className='btn col offset-s2 s2 green lighten-1 waves-light'>Save</button>
                        <button className='btn col offset-s1 s2 green lighten-1'>Apply!</button>
                        <button className='btn col offset-s1 s2'>Share</button>
                    </div>
                    <div className='bm-companyName center'>
                        Company Name
                    </div>
                    <div className='bm-jobTitle center'>
                        Job Title
                    </div>
                    <ul className='pagination col offset-s2 s10'>
                            <li className="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                            <li className="waves-effect"><a href="#!">Salary</a></li>
                            <li className="waves-effect"><a href="#!">Details</a></li>
                            <li className="active indigo lighten-2"><a href="#!">Learn More</a></li>
                            <li className="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                    </ul>
                    <div className='row'>
                        <p className='center'>Find out more details about the company</p>
                        <button className='btn col offset-s4 s4 blue'>Research Business</button>
                    </div>
                    <div className='row'>
                        <p className='center'>Do you know anyone working here?</p>
                        <button className='btn col offset-s4 s4 blue'>LinkedIn</button>
                    </div>
                </div>
                <div className='rightColumn col s6'>
                    <div className='row'>
                        <button className='btn red right'>X</button>
                    </div>
                    <div className='row'>   
                        <div className ="bm-map col s12">
                           <GoogleMap />
                        </div>
                            <ul className="row">
                                <li className='col s3'>Drive Time</li>
                                <li className='col offset-s1 s3'>No Traffic</li>
                                <li className='col offset-s1 s3'>15 mins</li>
                                <li className='col offset-s4 s3'>With Traffic</li>
                                <li className='col offset-s1 s3'>45 mins</li>
                            </ul>
                        
                        <div className='jobDetails'>
                            <label>Job Description</label>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Molestias alias reprehenderit magni illo fugiat. Architecto recusandae 
                                voluptatem est! Blanditiis culpa sapiente dolor iure itaque at deserunt 
                                delectus nulla eveniet ad incidunt quia voluptas eos, veniam laborum earum 
                                modi eum voluptate? Molestias ipsum accusamus repellendus natus vitae numquam 
                                magni nostrum velit eaque. Recusandae eius odio est?</p>
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