import React,{Component} from 'react';
import GoogleMap from './google_map';
import './business_modal.css';
import TabsInfo from './bm_tabs';

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
                    <TabsInfo />
              
                </div>
                <div className='rightColumn col s6'>
                    <div className='row'>
                        <button className='btn red right'>X</button>
                    </div>
                    <div className='row'>   
                        <div className ="bm-map">
                           <GoogleMap />
                        </div>
                            {/* <ul className="row">
                                <li className='col s3'>Drive Time</li>
                                <li className='col offset-s1 s3'>No Traffic</li>
                                <li className='col offset-s1 s3'>15 mins</li>
                                <li className='col offset-s4 s3'>With Traffic</li>
                                <li className='col offset-s1 s3'>45 mins</li>
                            </ul> */}
                        
                        <div className='bm-jobDetails'>
                            <label>Job Description</label>
                            <p className ="bm-jobDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Molestias alias reprehenderit magni illo fugiat. Architecto recusandae 
                                voluptatem est! Blanditiis culpa sapiente dolor iure itaque at deserunt 
                                delectus nulla eveniet ad incidunt quia voluptas eos, veniam laborum earum 
                                modi eum voluptate? Molestias ipsum accusamus repellendus natus vitae numquam 
                                magni nostrum velit eaque. Recusandae eius odio est? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure saepe odio blanditiis tenetur, ullam, accusantium quia laboriosam eveniet corrupti non pariatur ad, sequi nobis obcaecati perspiciatis fuga dolore error excepturi!
                                Neque commodi aperiam perspiciatis. Nostrum at quidem eum dolor culpa, adipisci aliquam excepturi in corrupti amet commodi nisi? Quidem facilis neque eos eligendi culpa cum nihil at animi quam voluptates?
                                Praesentium similique animi eius, sequi, dignissimos quaerat error nisi esse numquam voluptatibus non? Nam fugit, maiores asperiores, perspiciatis neque excepturi quam quia dolores mollitia odio officiis, optio ullam nihil et?
                                Omnis mollitia hic, quia quaerat unde ut exercitationem fuga, iusto minus dolor, doloribus expedita veritatis? Itaque atque laborum, tempora sit eos molestiae assumenda fugit? Eius ducimus exercitationem dolores? Optio, laborum.
                                Veritatis iusto rerum omnis, temporibus fuga asperiores expedita accusamus est rem quae natus neque. Est repellat quo eveniet voluptatibus molestiae autem nisi laborum magnam quis, nam, a sapiente incidunt non?
                                Nihil ducimus dolore alias, beatae magnam asperiores a quae accusamus ad est ratione nam eaque provident? Unde beatae officia, ipsum voluptatum omnis eligendi laboriosam reprehenderit eaque quo, numquam tempore eveniet!        </p>
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