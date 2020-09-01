import React, { Component } from 'react';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

class MPparent extends Component{
    state={
        name:"Likhith"
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({name:"Likhih"})
        },3000)
    }
    render(){
        console.log("*****parent Component rendered*****")
        return(
            <div>
                <PureComp name={this.state.name} />
                <br/>
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}
export default MPparent;