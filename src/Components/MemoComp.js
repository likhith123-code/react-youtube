import React from 'react';
/*
Renders only when there is a strict change in the parent data which has been passed
here in this component
or else it renders only once
This kind of things are used for performance boosting
This is same as pure component but for functions it is called memos

*/
const MemoComp = (props) =>{
    console.log("memo component rendered");
    return(
        <>
        memo Component data : {props.name}
        </>
    )
}

export default React.memo(MemoComp);