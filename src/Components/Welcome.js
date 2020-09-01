import React, { Component } from 'react'; //This is used to convert our code into JSX

class Welcome extends Component{
    state={
        message:"Welcome! Please Subscribe this Page"
    }
    clickhandler = ()=>{
        this.setState({
            message:"Thanks for Subscribing"
        })
    }
    render(){
        return(
            <div>
                <h2>{this.state.message}</h2> 
                <button onClick={this.clickhandler}>Subscribe Now!</button>
            </div>
        )
    }
}

export default Welcome;