import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './single_card.css';

class Card extends Component{
    render(){
        return (
            <div>
        <div className='sc-cardContainer card-panel'>
            <div className = 'sc-leftColumn'>
                <div className ='BusinessInfo'>
                    <ul className='sc-jobDetailsList'>
                        <li>Front End Web Developer</li>
                        <li>Solugenix Corp</li>
                        <li>Irvine, CA 92618</li>
                        <li>60-80K Salary</li>
                    </ul>
                </div>
                <div className='sc-jobDescription'>
                        <p>Front End Web Developer. Create REST based web 
                        services and APIs for consumption by mobile and 
                        web platforms. We are looking for Front End Web Developer 
                        for our a team builder for others, but most importantly we’ve 
                        been there. We know there is no substitute for experience,
                        so let...</p>
                        
                </div>
                <div className='datePosted'>
                
                    Date Posted: 8/10/18
                </div>
            </div>
            <div className="sc-rightColumn">
                <div className='appliedStatus'>
                    <input type='checkbox'/>
                    <span>Applied</span>
                </div>
                <div className='buttonArea'> 
                    <button className='btn indigo'>Save</button>
                    <Link to='/busModal'><button  className='btn'>More Info</button></Link>
                    <button className ='btn'>Share</button>
                </div>
            </div>
        </div>

    </div>
        )

    }

}

export default Card;