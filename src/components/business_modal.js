import React,{Component} from 'react';

class BusinessModal extends Component {
    render(){
        return (
            <div>
            <div class='container'>
                <div class="row">
                <div class='leftColumn col s6'>
                    <div class="row">
                        <button class='btn col offset-s2 s2 green lighten-1 waves-light'>Save</button>
                        <button class='btn col offset-s1 s2 green lighten-1'>Apply!</button>
                        <button class='btn col offset-s1 s2'>Share</button>
                    </div>
                    <div class='bm-companyName center'>
                        Company Name
                    </div>
                    <div class='bm-jobTitle center'>
                        Job Title
                    </div>
                    <ul class='pagination col offset-s2 s10'>
                            <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                            <li class="waves-effect"><a href="#!">Salary</a></li>
                            <li class="waves-effect"><a href="#!">Details</a></li>
                            <li class="active indigo lighten-2"><a href="#!">Learn More</a></li>
                            <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                    </ul>
                    <div class='row'>
                        <p class='center'>Find out more details about the company</p>
                        <button class='btn col offset-s4 s4 blue'>Research Business</button>
                    </div>
                    <div class='row'>
                        <p class='center'>Do you know anyone working here?</p>
                        <button class='btn col offset-s4 s4 blue'>LinkedIn</button>
                    </div>
                </div>
                <div class='rightColumn col s6'>
                    <div class='row'>
                        <button class='btn red right'>X</button>
                    </div>
                    <div class='row'>   
                        <div class ="bm-map col s12">
                            Google Map
                        </div>
                            <ul class="row">
                                <li class='col s3'>Drive Time</li>
                                <li class='col offset-s1 s3'>No Traffic</li>
                                <li class='col offset-s1 s3'>15 mins</li>
                                <li class='col offset-s4 s3'>With Traffic</li>
                                <li class='col offset-s1 s3'>45 mins</li>
                            </ul>
                        
                        <div class='jobDetails'>
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