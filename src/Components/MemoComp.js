import React from 'react';
//  when data is changed in parent only it will render => change should be 
// shallow change
const MemoComp = (props) =>{
    console.log("memo component rendered");
    return(
        <>
        memo Component data : {props.name}
        </>
    )
}

export default React.memo(MemoComp);