import React,{Component} from 'react';

class SalaryPercentage extends Component{
    constructor(props){
        super(props);

        this.state= {
            payStatus:'',
            percentageDifference:'',
            color:''
        }
    }

    componentDidMount(){
        this.findThePercentageDifference(80073, 88488)
    }

    findThePercentageDifference(cityAvg , stateAvg){
        let difference = parseInt(stateAvg) - parseInt(cityAvg);
        let percentageDifference = ((difference / stateAvg).toFixed(4)*100);
        this.setState(
            {
              percentageDifference:  percentageDifference
            })
        if(percentageDifference < 0){
            this.setState(
                {
                    payStatus:"higher",
            });
        } else {
            this.setState(
                {
                    payStatus:"lower",
                }
            )   
        }
    }

    render(){
        return(
            <p className = {this.state.percentageDifference>0?'red-text':'green-text'} >This salary is {this.state.percentageDifference}% {this.state.payStatus} than the state average.</p>
        )
    }
}

export default SalaryPercentage;