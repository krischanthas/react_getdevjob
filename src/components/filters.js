import React, { Component } from 'react';


class Filters extends Component {
    render(){
        return (
            <div>
                <div className ="sidebar card">
                    <label>Salary</label>
                    <div className='row'>
                        <input className='col s5 offset-s1' type='text' placeholder='Min' />
                        <input className='col s5 offset-s1 ' type='text' placeholder='Max' />
                    </div>
                    <div className='row'>
                        <label>Distance</label>
                        <p>(in Miles)</p>
                        <input className='col offset-s1 s10' type ='range' min='1' max='4' value='1' className='slider' id='distance' />
                    <div className='row'>
                        <ul className ='distanceList'>
                            <li className='offset-s1 col s2'>5</li>
                            <li className='col s2'>15</li>
                            <li className='col s2'>30</li>
                            <li className='col s2'>30+</li> 
                        </ul>
                    </div>
                    </div>
                    <div className='row'>       
                        <label>Experience</label>
                        <p>(years expected)</p>
                        <input className='col offset-s1 s10' type ='range' min='1' max='3' value='1' className='slider' id='experience' />
                        <div className='row'>   
                            <ul className ='experienceList'>
                                <li className='col offset-s1 s3'>0-2</li>
                                <li className='col offset-s1 s3'>3-5</li>
                                <li className='col offset-s1 s3'>5+</li> 
                            </ul>
                        </div>
                    </div>
                    <div className='row'>
                        <label>Posted Within</label>
                        <input className= 'col offset-s1 s10' type ='range' min='1' max='3' value='1' className='slider' id='datePosted' />
                        <div className='row'>
                            <ul className ='datePostedList'>
                                <li className='col offset-s1 s3'>0-7</li>
                                <li className='col offset-s1 s3'>7-30</li>
                                <li className='col offset-s1 s3'>30+</li> 
                            </ul>
                        </div>
                    </div>
                    <label>Employment Type</label>
                    <form>
                        <div className='row'>
                            <label>
                                <input type='checkbox' />
                                <span>Intership</span>
                            </label>
                            <label>
                                <input type='checkbox' />
                                <span>Contract</span>
                            </label>
                            <label>
                                <input type='checkbox'/>
                                <span>Part-Time</span>
                            </label>
                            <label>
                                <input type='checkbox' value='full-time'/>
                                <span>Full-Time</span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Filters;