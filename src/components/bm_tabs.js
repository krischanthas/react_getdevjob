import React, {Component} from 'react';
import {Tabs, Tab} from 'react-materialize';

class TabsInfo extends Component{
constructor(props){
    super(props);

    this.state = {
        salary: 'active',
        details: '',
        learnMore:''
    }
}
  
render(){
    console.log(this.state);
    return(
            <Tabs className="z-depth-1">
                <Tab title="Salary" active>
                    <div className="section1">
                        <div className='col s12'>
                            <p className=''>Average Salary</p>
                            <div className='text-center'>$69,717</div>
                        </div>
                    </div>
                </Tab>
                <Tab title="Details" >
                <div className="section2">
                        <div className='col s12' id='Details'>
                            <ul>
                                <li>Full Time</li>
                                <li>Hours of Operatiom</li>
                                <li>7:00 AM - 5:00 PM </li>
                                <li>Phone:</li>
                                <li>(555)555-5555</li>
                            </ul>
                        </div>
                    </div>
                </Tab>
                <Tab title="Learn More">
                <div className="setion3">
                        <div id='Learn More' className ='col s12'>
                            <div className='row'>
                                <p className='center'>Find out more details about the company</p>
                                <button className='btn col offset-s4 s4 blue'>Research Business</button>
                            </div>
                            <div className='row'>
                                <p className='center'>Do you know anyone working here?</p>
                                <button className='btn col offset-s4 s4 blue'>LinkedIn</button>
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
    )
}
}


export default TabsInfo;