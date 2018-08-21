import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './single_card.css';

class Card extends Component{

    render(){
        const {title, company_name, post_date, description } = this.props.details.job[0];
        let linkQuery = this.props.location.pathname + '/m'
        return (
            <div >
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
                    <input type='checkbox'/>
                    <span>Applied</span>
                </div>
                <div className='buttonArea'> 
                    <button className='btn indigo'>Save</button>
                    <Link to={linkQuery}><button  className='btn'>More Info</button></Link>
                    <button className ='btn'>Share</button>
                </div>
            </div>
        </div>

    </div>
        )

    }

}

export default Card;