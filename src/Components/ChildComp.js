import React from 'react';

const ChildComp = (props) =>{
    return(
        <div>
        <button onClick={()=>props.data("amazon")}>Amazon</button>
        <button onClick={()=>props.data('netflix')}>Netflix</button>
        <button onClick={()=>props.data('hotstar')}>Hotstar</button>
        </div>
        
    )
}
export default ChildComp;