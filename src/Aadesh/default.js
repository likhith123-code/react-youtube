import React from 'react';
import classes from './poster.css'

const Default = (props)=>{
    return(
        <>
        <div className={classes.default}>
            <marquee><h1>Movies will be displayed here</h1></marquee>
        </div>
        </>
        )
}

export default Default;