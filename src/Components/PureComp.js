import React, { PureComponent } from 'react';
//  when data is changed in parent only it will render => change should be 
// shallow change
class PureComp extends PureComponent{
    render(){
        console.log("Pure Component Rendered")
        return(
            <>
             Pure Component data: {this.props.name}
            </>
        )
    }
}

export default PureComp;