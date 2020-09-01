import React from 'react';

const Greet = (props) =>{
    const {name,place}= props; //destructuring
    //when using no need to use this.props again
    return(
        <div>
            <h1> hello {name} From {place} </h1> 
             {props.children}
        </div>
    );
}

export default Greet;