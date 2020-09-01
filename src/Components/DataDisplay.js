import React from 'react';
import classes from './DataDisplay.css';
const Display =(props)=>{
    return(
        <div className={classes.data} >
            {props.send}
        </div>
    )
}
export default Display;
