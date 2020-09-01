import React, { Component } from 'react';

class Counter extends Component{
    state={
        count:1
    }
    counterone = () =>{ //using set state
        this.setState({
            count:this.state.count+1
        })
    }
    countertwo =()=>{ //using previous state with set state
        this.setState((prevState)=>({
            count:prevState.count+2
        }))
    }
    render(){
        return(
            <div>
                <p>Counter Value is : {this.state.count}</p>
                <button onClick={this.counterone}>Increment Once</button>
                <button onClick={this.countertwo}>Increment twice</button>
            </div>
        )
    }
}

export default Counter;