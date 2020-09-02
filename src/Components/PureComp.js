import React, { PureComponent } from 'react';
/*
Renders only when there is a strict change in the parent data which has been passed
here in this component
or else it renders only once
This kind of things are used for performance boosting

*/
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