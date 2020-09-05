import React from 'react';
import classes from './poster.css'

const Poster = (props) =>{
    return(
        <>
        <div className={classes.card}>
           <div className={classes.movienames}>Movie Name : {props.name}</div>     
           <img src={props.image} width="100%" height="300px" />
           <p className={classes.languagename}>Language : {props.language}</p>
          
        </div>
        </>
    )
}

export default Poster;